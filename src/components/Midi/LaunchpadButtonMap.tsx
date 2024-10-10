import { ArrowForwardIos,  BrightnessHigh, Collections, Pause, PlayArrow, ViewSidebar, Menu as MenuIcon, Save, Delete, DeleteForever, Visibility, Autorenew, Fullscreen, FullscreenExit, BugReport } from '@mui/icons-material'
import { Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Stack, Typography, useTheme } from '@mui/material'
import BladeIcon from '../Icons/BladeIcon/BladeIcon'
import useStore from '../../store/useStore'
import Assign from '../Gamepad/Assign'
import { useEffect, useRef, useState } from 'react'
import { WebMidi } from 'webmidi'
import LaunchpadButton from './LaunchpadButton'
import { getColorFromValue } from './lpColors'
import { defaultMapping, IMapping, LpMapping } from '../../store/ui/storeMidi'
import LaunchpadColors from './LaunchpadColors'
import { download } from '../../utils/helpers'

const LaunchpadButtonMap = ({toggleSidebar, sideBarOpen, fullScreen, setFullScreen}:{toggleSidebar: () => void, sideBarOpen: boolean, fullScreen?: boolean, setFullScreen: (f:boolean) => void}) => {
    const theme = useTheme()
    const parentRef = useRef<HTMLDivElement>(null);
    const childRef = useRef<HTMLDivElement>(null);
    const [scale, setScale] = useState(1);
    const [midiLogs, setMidiLogs] = useState<{
        name: string;
        note: string;
        button: number;
    }[]>([])
    const [showMidiLogs, setShowMidiLogs] = useState(false)
    const [showMapping, setShowMapping] = useState(false)
    const setMidiMappingButtonNumbers = useStore((state) => state.setMidiMappingButtonNumbers)
    const initMidi = useStore((state) => state.initMidi)
    const lpType = useStore((state) => state.lpType)
    const setLpType = useStore((state) => state.setLpType)
    const midiEvent = useStore((state) => state.midiEvent)
    const midiOutput = useStore((state) => state.midiOutput)
    const recentScenes = useStore((state) => state.recentScenes)
    const midiMapping = useStore((state) => state.midiMapping)
    const setMidiMapping = useStore((state) => state.setMidiMapping)
    const setMidiSceneActiveColor = useStore((state) => state.setMidiSceneActiveColor)
    const setMidiSceneInactiveColor = useStore((state) => state.setMidiSceneInactiveColor)
    const setMidiCommandColor = useStore((state) => state.setMidiCommandColor)
    const pressedButtonColor = useStore((state) => state.midiColors.pressedButtonColor)
    const paused = useStore((state) => state.paused)
    const matrix = Array.from({ length: 9 }, () => Array.from({ length: 9 }, () => 0))
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    }
    const handleClose = () => {
      setAnchorEl(null);
    }
    const gotMidiMapping = async (e: any) => {
        const fileReader = new FileReader()
        fileReader.readAsText(e.target.files[0], 'UTF-8')
        fileReader.onload = (ev: any) => {
          if (ev.target.result && JSON.parse(ev.target.result).midiMapping)
            setMidiMapping(JSON.parse(ev.target.result).midiMapping)
            handleClose()
        }
    }
    const RightButton = ({children}: {
        children: React.ReactNode
    }) => <Box position={'relative'} alignSelf={'stretch'} justifySelf={'stretch'} display={'flex'} alignItems={'center'} justifyContent={'center'}><ArrowForwardIos /><Typography textTransform={'none'} variant='caption' color={'InactiveCaptionText'} position={'absolute'} bottom={0}>{children}</Typography></Box>
    const labels = (rowI: number, butI: number) => {
        if (rowI === 0 && butI === 0) return <Stack><PlayArrow sx={{ transform: 'rotate(270deg)'}} />{showMapping && <BrightnessHigh />}</Stack>
        if (rowI === 0 && butI === 1) return <Stack><PlayArrow sx={{ transform: 'rotate(90deg)'}} />{showMapping && <BrightnessHigh />}</Stack>
        if (rowI === 0 && butI === 2) return <Stack><PlayArrow sx={{ transform: 'rotate(180deg)'}} />{showMapping && <Collections />}</Stack>        
        if (rowI === 0 && butI === 3) return <Stack><PlayArrow sx={{ transform: 'rotate(0deg)'}} />{showMapping && <Pause />}</Stack>        
        if (rowI === 0 && butI === 3) return <PlayArrow />
        if (rowI === 0 && butI === 4) return <Typography textTransform={'none'} variant='caption' color={'InactiveCaptionText'}><br />Session Mixer</Typography>
        if (rowI === 0 && butI === 5) return <Typography textTransform={'none'} variant='caption' color={'InactiveCaptionText'}>Note</Typography>
        if (rowI === 0 && butI === 6) return <Typography textTransform={'none'} variant='caption' color={'InactiveCaptionText'}>Custom</Typography>
        if (rowI === 0 && butI === 7) return <Typography textTransform={'none'} variant='caption' color={'InactiveCaptionText'}><br />Capture MIDI</Typography>
        if (rowI === 0 && butI === 8) return <BladeIcon sx={{ fontSize: '58px !important', '& svg': { width: '54px', height: '54px'}}} name='launchpad' />
        if (rowI === 1 && butI === 8) return <RightButton>Volume</RightButton>
        if (rowI === 2 && butI === 8) return <RightButton>Pan</RightButton>
        if (rowI === 3 && butI === 8) return <RightButton>Send&nbsp;B</RightButton>
        if (rowI === 4 && butI === 8) return <RightButton>Send&nbsp;A</RightButton>
        if (rowI === 5 && butI === 8) return <RightButton>Stop&nbsp;Clip</RightButton>
        if (rowI === 6 && butI === 8) return <RightButton>Mute</RightButton>
        if (rowI === 7 && butI === 8) return <RightButton>Solo</RightButton>
        if (rowI === 8 && butI === 8) return <RightButton>Record&nbsp;Arm</RightButton>
        if (midiMapping[0][parseInt(`${(9 - rowI)}${butI + 1}`)]?.command === 'padscreen' && showMapping) return <BladeIcon name="SportsEsports" sx={{color: '#000'}}/>
        if (midiMapping[0][parseInt(`${(9 - rowI)}${butI + 1}`)]?.command === 'scan-wled' && showMapping) return <BladeIcon name="wled" sx={{color: '#000'}}/>
        if (midiMapping[0][parseInt(`${(9 - rowI)}${butI + 1}`)]?.command === 'scene-playlist' && showMapping) return <BladeIcon name="Collections" sx={{color: '#000'}}/>
        if (midiMapping[0][parseInt(`${(9 - rowI)}${butI + 1}`)]?.command === 'frequencies' && showMapping) return <BladeIcon name="mdi:sine-wave" sx={{color: '#000'}}/>
        if (midiMapping[0][parseInt(`${(9 - rowI)}${butI + 1}`)]?.command === 'transitions' && showMapping) return <BladeIcon name="GraphicEq" sx={{color: '#000'}}/>
        if (midiMapping[0][parseInt(`${(9 - rowI)}${butI + 1}`)]?.command === 'copy-to' && showMapping) return <BladeIcon name="CopyAll" sx={{color: '#000'}}/>
        if (midiMapping[0][parseInt(`${(9 - rowI)}${butI + 1}`)]?.command === 'brightness-up' && showMapping) return <BladeIcon name="BrightnessHigh" sx={{color: '#000'}}/>
        if (midiMapping[0][parseInt(`${(9 - rowI)}${butI + 1}`)]?.command === 'brightness-down' && showMapping) return <BladeIcon name="BrightnessLow" sx={{color: '#000'}}/>
        if (midiMapping[0][parseInt(`${(9 - rowI)}${butI + 1}`)]?.command === 'play/pause' && showMapping) return <BladeIcon name="PlayArrow" sx={{color: '#000'}}/>
        if (midiMapping[0][parseInt(`${(9 - rowI)}${butI + 1}`)]?.command === 'smartbar' && showMapping) return <BladeIcon name="LocalPlay" sx={{color: '#000'}}/>
        if (midiMapping[0][parseInt(`${(9 - rowI)}${butI + 1}`)]?.command === 'one-shot' && showMapping) return <BladeIcon name="mdi:pistol" sx={{color: '#000'}}/>
        if (midiMapping[0][parseInt(`${(9 - rowI)}${butI + 1}`)]?.command === 'scene' && showMapping) return (<Stack display={'flex'}  sx={{color: '#000'}}><BladeIcon name="Wallpaper" />
                {/* <Typography textTransform={'none'} variant='caption'>{midiMapping[0][parseInt(`${(9 - rowI)}${butI + 1}`)]?.payload?.scene}</Typography> */}
            </Stack>)
        if (midiMapping[0][parseInt(`${(9 - rowI)}${butI + 1}`)]?.command === 'play/pause' && showMapping) return <BladeIcon name={paused ? "PlayArrow" : "PauseOutlined"} sx={{color: '#000'}}/>
        return showMapping ? `${(9 - rowI)}${butI + 1}` : null
    }
    // console.log(midiMapping)

    const setMode = (mode: 'programmer' | 'live' | 'standalone' | 'daw') => {
        initMidi()
        const output = midiOutput !== '' ? WebMidi.getOutputByName(midiOutput) : WebMidi.outputs[1]
        if (!output) return
        switch (mode) {
            case 'programmer':
                output.send([0xF0, 0x00, 0x20, 0x29, 0x02, 0x0C, 0x0E, 0x01, 0xF7])
                break
            case 'live':
                output.send([0xF0, 0x00, 0x20, 0x29, 0x02, 0x0C, 0x0E, 0x00, 0xF7])
                break
            case 'standalone':
                output.send([0xF0, 0x00, 0x20, 0x29, 0x02, 0x0C, 0x10, 0x00, 0xF7])
                break
            case 'daw':
                output.send([0xF0, 0x00, 0x20, 0x29, 0x02, 0x0C, 0x10, 0x01, 0xF7])
                break
            default:
                break
        }
    }
    
    useEffect(() => {
        const parent = parentRef.current;
        const child = childRef.current;

        if (parent && child) {
            const scaleX = parent.clientWidth / child.clientWidth;
            const scaleY = parent.clientHeight / child.clientHeight;
            const scale = Math.min(scaleX, scaleY);
            setScale(scale);
        }
    }, [matrix]);

    useEffect(() => {        
        initMidi()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (midiEvent.button === -1) return
        setMidiLogs((prev) => [...prev, midiEvent])
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [midiEvent])

  return (
    <>
        <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'} mb={fullScreen ? '5px' : 2}>
            <Stack direction={'row'} alignItems={'center'} spacing={2}>            
                <Stack direction={'row'} alignItems={'center'} spacing={0}>
                    <Button onClick={() => setMode('programmer')}>Programmer</Button>
                    <Button onClick={() => setMode('live')}>Live</Button>        
                </Stack>
            </Stack>
            <Stack direction={'row'} alignItems={'center'} spacing={0}> 
                <Button onClick={() => initMidi()}><Autorenew /></Button>
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    <MenuIcon />
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                    }}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <LaunchpadColors component='MenuItem' />
                    <MenuItem onClick={() => {
                        setFullScreen(!fullScreen)
                        handleClose()
                    }}>
                        <ListItemIcon>{fullScreen ? <FullscreenExit /> : <Fullscreen />}</ListItemIcon>
                        <ListItemText primary="Fullscreen" />
                    </MenuItem>
                    <MenuItem onClick={() => {
                        toggleSidebar()
                        handleClose()
                    }}>
                        <ListItemIcon><ViewSidebar /></ListItemIcon>
                        <ListItemText primary="Show Sidebar" />
                    </MenuItem>
                    
                    <MenuItem onClick={() => setShowMapping(!showMapping)}>
                        <ListItemIcon><Visibility /></ListItemIcon>
                        <ListItemText primary="Show Mapping" />
                    </MenuItem>     
                    <Divider />
                    <MenuItem onClick={() => {
                        download({ midiMapping }, 'midiMapping.json', 'application/json')
                        handleClose()
                    }}>
                        <ListItemIcon><Save /></ListItemIcon>
                        <ListItemText primary="Save Mapping" />
                    </MenuItem>
                    <MenuItem>
                        <input
                            hidden
                            accept="application/json"
                            id="get-midi-mapping"
                            type="file"
                            onChange={(e) => {
                                gotMidiMapping(e)
                            }}
                        />
                        <label
                            htmlFor="get-midi-mapping"
                            style={{ width: '100%', display: 'flex' }}
                        >
                            <ListItemIcon><BladeIcon name="mdi:folder-open" /></ListItemIcon>
                            <ListItemText primary="Load Mapping" />
                        </label>
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => {
                        setMidiMapping({ 0: defaultMapping } as IMapping)
                        setTimeout(() => {
                            window.location.reload()
                        }, 100)
                    }}>
                        <ListItemIcon><DeleteForever /></ListItemIcon>
                        <ListItemText primary="Reset Mapping" />
                    </MenuItem>                    
                    <MenuItem onClick={() => {
                        const m = JSON.parse(JSON.stringify(midiMapping));
                        Object.keys(m).forEach(mappingKey => {
                            const nestedMapping = m[parseInt(mappingKey) as keyof typeof m];
                            Object.keys(nestedMapping).forEach(key => {
                                const b = nestedMapping[parseInt(key) as keyof typeof nestedMapping];
                                delete b.colorCommand;
                                delete b.colorSceneActive;
                                delete b.colorSceneInactive;
                            });
                        });
                        setMidiMapping(m);
                        setTimeout(() => {
                            initMidi()
                        }, 100)
                        handleClose()
                    }}>
                        <ListItemIcon><Delete /></ListItemIcon>
                        <ListItemText primary="Reset Colors" />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => {
                        setMidiMappingButtonNumbers(LpMapping.LaunchpadX)
                        setLpType('LPX')
                        setMidiSceneActiveColor('1E')
                        setMidiSceneInactiveColor('3C')
                        setMidiCommandColor('63')
                        initMidi()
                    }}>
                        <ListItemIcon><BladeIcon name='launchpad' /></ListItemIcon>
                        <ListItemText primary="Launchpad X" />
                    </MenuItem>
                    <MenuItem onClick={() => {
                        setMidiMappingButtonNumbers(LpMapping.LaunchpadS)
                        setLpType('LPS')
                        setMidiSceneActiveColor('3C')
                        setMidiSceneInactiveColor('0F')
                        setMidiCommandColor('3E')
                        initMidi()
                    }}>
                        <ListItemIcon><BladeIcon name='launchpad' /></ListItemIcon>
                        <ListItemText primary="Launchpad S" />
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={() => {
                        setShowMidiLogs(!showMidiLogs)
                        const m = JSON.parse(JSON.stringify(midiMapping));
                        Object.keys(m).forEach(mappingKey => {
                            const nestedMapping = m[parseInt(mappingKey) as keyof typeof m];
                            Object.keys(nestedMapping).forEach(key => {
                                const b = nestedMapping[parseInt(key) as keyof typeof nestedMapping];
                                delete b.colorCommand;
                                delete b.colorSceneActive;
                                delete b.colorSceneInactive;
                            });
                        });
                        setMidiMapping(m);
                        // Turn off all MIDI LEDs
                        const output = WebMidi.getOutputByName(midiOutput);
                        if (output) {
                            for (let i = 0; i < 128; i++) {
                                output.sendNoteOff(i, {release: 0});
                            }
                        } else {
                            console.error('MIDI output not found');
                        }
                        handleClose()
                        }}>
                        <ListItemIcon><Delete /></ListItemIcon>
                        <ListItemText primary="Reset Colors & Turn Off LEDs" />
                        <ListItemIcon><BugReport /></ListItemIcon>
                        <ListItemText primary={`${ showMidiLogs ? 'Hide' : 'Show'} MIDI Logs`} />
                    </MenuItem>
                </Menu>        
            </Stack>
        </Stack>
        <Stack direction={'row'} spacing={2} mb={fullScreen ? 0 : 2} ref={parentRef} sx={fullScreen ? {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'calc(100% - 40px)',
        } : {}}>
            <Stack direction={'column'} spacing={1} ref={childRef} sx={{transform: `scale(${scale})`}}>
                {matrix.map((row, rowIndex) => {
                    return (
                    <Stack key={'row' + rowIndex} direction={'row'} spacing={1}>
                        {row.map((_button, buttonIndex) => {
                        const row = 9 - rowIndex
                        const column = buttonIndex + 1
                        const buttonNumber = `${row}${column}`
                        const btnNumberInt = parseInt(buttonNumber)
                        const btn = midiMapping[0][btnNumberInt]

                        // Use the buttonNumber from the mapping for functional logic
                        const functionalButtonNumber = btn?.buttonNumber
                        const bgColor = functionalButtonNumber === -1 ? '#000' : (midiEvent.button === functionalButtonNumber)
                            ? ( pressedButtonColor || theme.palette.primary.main )
                            : btn?.command && 
                            btn?.command === 'scene' &&
                            btn?.payload?.scene === recentScenes[0]
                            ? getColorFromValue((btn?.colorSceneActive || '1E'), lpType) || '#0f0'
                            : btn?.command && 
                                btn?.command === 'scene' 
                                ? getColorFromValue((btn?.colorSceneInactive || '07'), lpType) || '#f00'
                                : btn?.command && 
                                btn?.command !== 'none'  && rowIndex !== 0
                                ? getColorFromValue((btn?.colorCommand || '63'), lpType) || '#ff0'
                                : rowIndex === 0 || buttonIndex === 8
                                    ? '#000' 
                                    : '#ccc'

                        return (
                            <LaunchpadButton
                                hidden={functionalButtonNumber === -1}
                                buttonNumber={btnNumberInt}
                                active={!!(rowIndex === 0 && btn?.command && btn?.command !== 'none')}
                                bgColor={bgColor}
                                key={'button' + buttonIndex}
                                borderless={rowIndex === 0 && buttonIndex === 8}
                            >
                            {labels(rowIndex, buttonIndex)}
                            </LaunchpadButton>
                        )
                        })}
                    </Stack>
                    )
                })}
            </Stack>

        {sideBarOpen && <Stack direction={'column'} spacing={1} maxHeight={694} width={300} sx={{ overflowY: 'scroll'}}>
            {matrix.map((row, rowIndex) => row.map((button, buttonIndex) => {
                return (
                    <Assign
                        type={'midi'}
                        padIndex={0}
                        mapping={midiMapping}
                        setMapping={setMidiMapping}
                        pressed={midiEvent.button === parseInt(`${(rowIndex + 1)}${buttonIndex + 1}`)}
                        index={`${(rowIndex + 1)}${buttonIndex + 1}`}
                        key={`${(rowIndex + 1)}${buttonIndex + 1}`}
                    />
                )
            }))}
        </Stack>}
    </Stack>
        {showMidiLogs && <Box>
            <Stack direction={'row'}>
                <Typography width={200} textAlign={'left'} variant='caption'>Name</Typography>
                <Typography width={50} variant='caption'>Note</Typography>
                <Typography width={50} variant='caption'>Button</Typography>
                <Typography variant='caption' sx={{ cursor: 'pointer'}} onClick={() => setMidiLogs([])}>Clear Logs</Typography>
            </Stack>
            <Divider sx={{ mb: 0.5 }} />
            <Box sx={{overflowY: 'auto', height: 120}}>
                {midiLogs.map((log, index) => <Stack key={index} direction={'row'}>
                    <Typography width={200} variant='caption'>{log.name}</Typography>
                    <Typography width={50} variant='caption'>{log.note}</Typography>
                    <Typography width={50} variant='caption'>{log.button}</Typography>
                </Stack>)}
            </Box>
        </Box>}

</>)
}

export default LaunchpadButtonMap