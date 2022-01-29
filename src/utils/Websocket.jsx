import React from 'react';
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useStore from './apiStore';
import Sockette from 'sockette';
import isElectron from 'is-electron';


// const ws = new WebSocket(`${window.location.protocol === 'https' ? 'wss' : 'ws'}://${window.localStorage.getItem('ledfx-host')?.split('https://')[0].split('http://')[0] || 'localhost:8888'}/api/websocket`);
// const ws = new WebSocket(`${(window.localStorage.getItem('ledfx-host') && window.localStorage.getItem('ledfx-host').startsWith('https')) ? 'wss' : 'ws'}://${window.localStorage.getItem('ledfx-host')?.split('https://')[0].split('http://')[0] || 'localhost:8888'}/api/websocket`);
// const ws = new WebSocket(`wss://${window.localStorage.getItem('ledfx-host')?.split('https://')[0].split('http://')[0].split(':')[0] || 'localhost:8888'}/api/websocket`);
// const ws = new WebSocket(`${window.localStorage.getItem('ledfx-ws') ? window.localStorage.getItem('ledfx-ws') : 'ws://localhost:8888'}/api/websocket`, (window.localStorage.getItem('ledfx-ws') && window.localStorage.getItem('ledfx-ws').startsWith('wss')) ? 'https' : 'http');
// const ws = new WebSocket(`wss://127.0.0.1/api/websocket`, 'wss');


function createSocket() {
  const newBase = window.localStorage.getItem('ledfx-newbase') === 1

  if (!newBase) {
    const _ws = new Sockette(`${(window.localStorage.getItem('ledfx-host') || (isElectron() ? 'http://localhost:8888' : window.location.href.split('/#')[0])).replace('https://', 'wss://').replace('http://', 'ws://')}/api/websocket`, {
      timeout: 5e3,
      maxAttempts: 10,
      onopen: e => {
        // console.log('Connected!', e)
        document.dispatchEvent(
          new CustomEvent("disconnected", {
            detail: {
              isDisconnected: false
            }
          })
        );
        _ws.ws = e.target;
        const req = {
          event_type: "devices_updated",
          id: 1,
          type: "subscribe_event",
        };
        // console.log("Send");
        ws.send(JSON.stringify(++req.id && req));
      },
      onmessage: (event) => {
        if (JSON.parse(event.data).event_type === "visualisation_update") {
          document.dispatchEvent(
            new CustomEvent("YZ", {
              detail: {
                id: JSON.parse(event.data).vis_id,
                pixels: JSON.parse(event.data).pixels,
              }
            })
          );
        }
        if (JSON.parse(event.data).event_type === "devices_updated") {
          document.dispatchEvent(
            new CustomEvent("YZold", {
              detail: "devices_updated"
            })
          );
        }
      },
      // onreconnect: e => console.log('Reconnecting...', e),
      // onmaximum: e => console.log('Stop Attempting!', e),
      onclose: e => {
        // console.log('Closed!', e)
        window.localStorage.removeItem("core-init")
        if (window.localStorage.getItem('ledfx-newbase') !== '1') {        
          document.dispatchEvent(
            new CustomEvent("disconnected", {
              detail: {
                isDisconnected: true
              }
            })
          );
        }
      },
      // onerror: e => console.log('Error:', e)
    });
    return _ws
  }
  return
}
const ws = createSocket();
export default ws;
export const WsContext = React.createContext(ws);

export const HandleWs = () => {
  const { pathname } = useLocation();
  const virtuals = useStore((state) => state.virtuals);
  const pixelGraphs = useStore((state) => state.pixelGraphs);
  const setPixelGraphs = useStore((state) => state.setPixelGraphs);
  const graphs = useStore((state) => state.graphs);
  const [wsReady, setWsReady] = useState(false)

  useLayoutEffect(() => {
    if (!(pathname.startsWith("/Devices") || pathname.startsWith("/device"))) {
      setPixelGraphs([]);
    }
  }, [pathname]);

  useLayoutEffect(() => {
    if (!graphs) {
      setPixelGraphs([]);
    }
  }, [graphs]);

  useEffect(() => {
    if (pixelGraphs.length > 0 && wsReady) {
      pixelGraphs.map((d, i) => {
        const getWs = async () => {
          const request = {
            event_filter: {
              vis_id: d,
              is_device: !!virtuals[d]?.is_device,
            },
            event_type: "visualisation_update",
            id: i,
            type: "subscribe_event",
          };
          // console.log("Send");
          ws.send(JSON.stringify(++request.id && request));          
        };
        getWs();
      })

      return () => {
        pixelGraphs.map((d, i) => {
          const removeGetWs = async () => {
            const request = {
              id: i,
              type: "unsubscribe_event",
              event_type: "visualisation_update",
            };
            ws.send(JSON.stringify(++request.id && request));
          };
          // console.log("Clean Up");
          removeGetWs();
        })
      }
    }
  }, [wsReady, pixelGraphs]);

  if (!wsReady) {
    if (ws && ws.ws) {
      setWsReady(true)
    }
  }

  return null;
}