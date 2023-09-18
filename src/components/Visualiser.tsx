import React, { useEffect, useRef } from 'react'
import { Card, CardContent, CardHeader } from '@mui/material'
import * as THREE from 'three'
import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise'

const Visualiser = () => {
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const avg = (array: Uint8Array) => {
      const sum = array.reduce((acc, curr) => acc + curr, 0)
      return sum / array.length
    }

    import React, { useEffect, useRef } from 'react'; import { Card, CardContent, CardHeader } from '@mui/material'; import * as THREE from 'three'; import { SimplexNoise } from 'three/examples/jsm/math/SimplexNoise';

const Visualiser = () => { const audioRef = useRef(null);

useEffect(() => { const avg = (array: Uint8Array) => { const sum = array.reduce((acc, curr) => acc + curr, 0); return sum / array.length; };

const max = (array: Uint8Array) => {
  let maxVal = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxVal) {
      maxVal = array[i];
    }
  }
  return maxVal;
};
const vizInit = () => {
  const audio = audioRef.current!;
  const fileLabel = document.querySelector('label.file') as HTMLInputElement;

  audio.oncanplaythrough = () => {
    audio.play();
    play();
  };

  fileLabel.addEventListener('change', () => {
    fileLabel.classList.add('normal');
    audio.classList.add('active');

    const files = fileLabel.files!;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();
    play();
  });

  function play() {
    const context = new AudioContext();
    const src = context.createMediaElementSource(audio);
    const analyser = context.createAnalyser();
    src.connect(analyser);
    analyser.connect(context.destination);
    analyser.fftSize = 512;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const scene = new THREE.Scene();
    const group = new THREE.Group();

    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 100);
    camera.lookAt(scene.position);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    const planeGeometry = new THREE.PlaneGeometry(800, 800, 20, 20);
    const planeMaterial = new THREE.MeshLambertMaterial({
      color: 0x6904ce,
      side: THREE.DoubleSide,
      wireframe: true
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.set(0, 30, 0);
    group.add(plane);

    const plane2 = new THREE.Mesh(planeGeometry, planeMaterial);
    plane2.rotation.x = -0.5 * Math.PI;
    plane2.position.set(0, -30, 0);
    group.add(plane2);

    const icosahedronGeometry = new THREE.IcosahedronGeometry(10, 4);
    const lambertMaterial = new THREE.MeshLambertMaterial({
      color: 0xff00ee,
      wireframe: true
    });
    const ball = new THREE.Mesh(icosahedronGeometry, lambertMaterial);
    ball.position.set(0, 0, 0);
    group.add(ball);

    const ambientLight = new THREE.AmbientLight(0xaaaaaa);
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.intensity = 0.9;
    spotLight.position.set(-10, 40, 20);
    spotLight.lookAt(ball.position);
    spotLight.castShadow = true;
    scene.add(spotLight);

    scene.add(group);
    document.getElementById('out')!.appendChild(renderer.domElement);

    window.addEventListener(
      'resize',
      () => {
        onWindowResize();
      },
      false
    );

    render();

    function render() {
      analyser.getByteFrequencyData(dataArray);

      const lowerHalfArray = dataArray.slice(0, dataArray.length / 2 - 1);
      const upperHalfArray = dataArray.slice(
        dataArray.length / 2 - 1,
        dataArray.length - 1
      );

      const overallAvg = avg(dataArray);
      const lowerMax = max(lowerHalfArray);
      const lowerAvg = avg(lowerHalfArray);
      const upperMax = max(upperHalfArray);
      const upperAvg = avg(upperHalfArray);

      const lowerMaxFr = lowerMax / lowerHalfArray.length;
      const lowerAvgFr = lowerAvg / lowerHalfArray.length;
      const upperMaxFr = upperMax / upperHalfArray.length;
      const upperAvgFr = upperAvg / upperHalfArray.length;

      makeRoughGround(plane, modulate(upperAvgFr, 0, 1, 0.5, 4));
      makeRoughGround(plane2, modulate(lowerMaxFr, 0, 1, 0.5, 4));
      makeRoughBall(
        ball,
        modulate(lowerMaxFr ** 0.8, 0, 1, 0, 8),
        modulate(upperAvgFr, 0, 1, 0, 4)
      );

      group.rotation.y += 0.005;
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    }

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function makeRoughBall(
      mesh: THREE.Mesh,
      bassFr: number,
      treFr: number
    ) {
      mesh.geometry.vertices.forEach(function (vertex: any, i: any) {
        const offset = mesh.geometry.parameters.radius;
        const amp = 7;
        const time = window.performance.now();

        vertex.normalize();

        const rf = 0.00001;
        const distance =
          offset +
          bassFr +
          SimplexNoise.noise3d(
            vertex.x + time * rf * 7,
            vertex.y + time * rf * 8,
            vertex.z + time * rf * 9
          ) *
            amp *
            treFr;

        vertex.multiplyScalar(distance);
      });

      mesh.geometry.verticesNeedUpdate = true;
      mesh.geometry.normalsNeedUpdate = true;
      mesh.geometry.computeVertexNormals();
      mesh.geometry.computeFaceNormals();
    }

    function makeRoughGround(mesh: THREE.Mesh, distortionFr: number) {
      mesh.geometry.vertices.forEach(function (vertex: any, i: any) {
        const amp = 2;
        const time = Date.now();
        const distance =
          (SimplexNoise.noise2d(
            vertex.x + time * 0.0003,
            vertex.y + time * 0.0001
          ) +
            0) *
          distortionFr *
          amp;

        vertex.z = distance;
      });

      mesh.geometry.verticesNeedUpdate = true;
      mesh.geometry.normalsNeedUpdate = true;
      mesh.geometry.computeVertexNormals();
      mesh.geometry.computeFaceNormals();
    }

    audio.play();
  }
};

vizInit();


}, []);

return (

<Card style={{ maxWidth: 720, width: '100%', margin: '3rem', background: '#1c1c1e' }} > Choose a song
  }, [])

  return (
    <div>
      <Card
        style={{
          maxWidth: 720,
          width: '100%',
          margin: '3rem',
          background: '#1c1c1e'
        }}
      >
        <CardHeader title="Audio Visualiser" />
        <CardContent>
          <label htmlFor="thefile" className="file">
            Choose a song
            <input type="file" id="thefile" />
          </label>
          <audio id="audio" ref={audioRef} />
          <div id="out" />
        </CardContent>
      </Card>
      <div>Testing</div>
    </div>
  )
}

export default Visualiser
