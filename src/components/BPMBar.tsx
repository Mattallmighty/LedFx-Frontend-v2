/* eslint-disable @typescript-eslint/indent */
import { Typography } from '@mui/material'
import useStore from '../store/useStore'

export default function BPMBar() {
  const audioFeatures = useStore(
    (state) => state.spotify.spotifyData.audioFeatures
  )

  // eslint-disable-next-line no-restricted-globals
  if (!isNaN(audioFeatures?.tempo)) {
    return <Typography>{parseInt(audioFeatures?.tempo, 10)} BPM</Typography>
  }
}
