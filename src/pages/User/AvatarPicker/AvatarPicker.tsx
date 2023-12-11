import { useEffect, useRef, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'
import { Delete, Save, UploadFile } from '@mui/icons-material'
import setupIndexedDB, { useIndexedDBStore } from 'use-indexeddb'
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Select,
  Slider,
  Stack,
  Typography
} from '@mui/material'
// import axios from 'axios'
import { getCroppedImg, idbConfig, readFile } from './avatarUtils'
import {
  AvatarPickerDefaults,
  AvatarPickerProps,
  storageOptions
} from './AvatarPicker.interface'

const AvatarPicker = ({
  defaultIcon,
  editIcon,
  avatar,
  setAvatar,
  size = 150,
  initialZoom = 1,
  minZoom = 0.01,
  maxZoom = 3,
  stepZoom = 0.01,
  minRotation = 0,
  maxRotation = 360,
  stepRotation = 0.01,
  storage = 'indexedDb',
  storageKey = 'avatar',
  ...props
}: AvatarPickerProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [newStorage, setNewStorage] = useState(storage)
  const [imageSrc, setImageSrc] = useState<any>(null)
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [rotation, setRotation] = useState(0)
  const [zoom, setZoom] = useState(initialZoom)
  const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)
  const userName = localStorage.getItem('username')

  // const cloud = axios.create({
  //   baseURL: 'https://strapi.yeonv.com'
  // })

  const onCropComplete = (_croppedArea: Area, newcroppedAreaPixels: Area) => {
    setCroppedAreaPixels(newcroppedAreaPixels)
  }

  useEffect(() => {
    if (newStorage === 'indexedDb' && !setAvatar) {
      setupIndexedDB(idbConfig)
        .then(() => console.log('indexedDB setup complete'))
        .catch((e) => console.error('indexedDb error:', e))
    }
  }, [])

  const { getByID, update } =
    newStorage === 'indexedDb' && !setAvatar
      ? useIndexedDBStore('avatars')
      : { getByID: null, update: null }

  const setAvatarIndexedDb = (a: string) => {
    if (newStorage === 'indexedDb' && !setAvatar && update) {
      update({ id: 1, [storageKey]: a }).then(() =>
        console.log('avatar updated')
      )
    }
  }
  const [avatarSrc, setAvatarSrc] = useState<null | string>(null)

  if (newStorage === 'indexedDb' && !setAvatar && getByID) {
    getByID(1).then(
      (avatarFromDB: any) => {
        if (avatarFromDB && avatarFromDB[storageKey])
          setAvatarSrc(avatarFromDB[storageKey])
      },
      (error) => {
        console.log('Error: ', error)
      }
    )
  }
  const showCroppedImage = async () => {
    if (!imageSrc || !croppedAreaPixels) {
      return
    }
    try {
      const newcroppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      )

      fetch(newcroppedImage as any)
        .then((res) => res.blob())
        .then((blob) => {
          const reader = new FileReader()
          reader.onloadend = async function () {
            if (reader.result) {
              if (newStorage === 'custom' && setAvatar) {
                setAvatar(reader.result.toString())
              } else if (newStorage === 'localStorage') {
                localStorage.setItem(storageKey, reader.result.toString())
              } else if (newStorage === 'indexedDb' && !setAvatar) {
                setAvatarIndexedDb(reader.result.toString())
              } else if (newStorage === 'cloud') {
                const formData = new FormData()
                // resize blob to 150x150
                // const resizedBlob = new Promise((resolve) => {
                //   const img = new Image()
                //   img.src = URL.createObjectURL(blob)
                //   img.onload = () => {
                //     const elem = document.createElement('canvas')
                //     const ctx = elem.getContext('2d')
                //     if (ctx) {
                //       ctx.drawImage(img, 0, 0, 150, 150)
                //       ctx.canvas.toBlob(
                //         (blobb) => {
                //           resolve(blobb)
                //         },
                //         'image/png',
                //         1
                //       )
                //     }
                //   }
                // })

                // const resizedBlob2 = await resizedBlob
                formData.append('files', blob, `${userName}.png`)
                formData.append('ref', 'application::user-details.user-details')
                formData.append('refId', '10')
                formData.append('field', 'avatarUrl')
                const imageUploaded = await fetch(
                  'https://strapi.yeonv.com/upload',
                  {
                    method: 'POST',
                    body: formData,
                    headers: {
                      Authorization: `Bearer ${localStorage.getItem('jwt')}`
                    }
                  }
                )

                const imageUploadedJson = await imageUploaded.json()
                console.log(imageUploadedJson)
                // cloud
                //   .post(
                //     'user-details',
                //     {
                //       avatarUrl: blob,
                //       user: localStorage.getItem('ledfx-cloud-userid'),
                //       users_permissions_user:
                //         localStorage.getItem('ledfx-cloud-userid')
                //     },
                //     {
                //       headers: {
                //         Authorization: `Bearer ${localStorage.getItem('jwt')}`
                //       }
                //     }
                //   )
                //   .then((res: any) => {
                //     if (res.data.length > 0 && res.data[0]) {
                //       console.log(res.data[0])
                //     }
                //   })
              }
            }
          }
          reader.readAsDataURL(blob)
        })
    } catch (e) {
      console.error(e)
    }
    setOpen(false)
    // window.location.reload()
  }

  const onFileChange = async (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      const imageDataUrl = await readFile(file)
      setImageSrc(imageDataUrl)
    }
  }

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        if (inputRef.current) inputRef.current.click()
      }, 200)
    }
  }, [open])

  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true)
        }}
        sx={{ borderRadius: '50%', padding: 0 }}
        {...props}
      >
        {avatarSrc || avatar ? (
          <>
            <Avatar
              src={avatarSrc || avatar}
              sx={{ width: size, height: size, '&:hover': { opacity: 0.4 } }}
            />
            {editIcon}
          </>
        ) : (
          defaultIcon
        )}
      </Button>
      <Dialog
        fullWidth
        open={open}
        sx={{ '.MuiPaper-root': { height: 'min(80vh, 700px)' } }}
        onClose={() => setOpen(false)}
      >
        <DialogTitle>Choose Avatar</DialogTitle>
        <DialogContent>
          {imageSrc ? (
            <Stack>
              <div>
                <div>
                  <Typography variant="overline">Zoom</Typography>
                  <Slider
                    value={zoom}
                    min={minZoom}
                    max={maxZoom}
                    step={stepZoom}
                    aria-labelledby="Zoom"
                    onChange={(e, newzoom) =>
                      typeof newzoom === 'number' && setZoom(newzoom)
                    }
                  />
                </div>
                <div>
                  <Typography variant="overline">Rotation</Typography>
                  <Slider
                    value={rotation}
                    min={minRotation}
                    max={maxRotation}
                    step={stepRotation}
                    aria-labelledby="Rotation"
                    onChange={(e, newrotation) =>
                      typeof newrotation === 'number' &&
                      setRotation(newrotation)
                    }
                  />
                </div>
                <Select>
                  {storageOptions.map((option) => (
                    <option
                      key={option}
                      value={option}
                      onClick={() => setNewStorage(option)}
                    >
                      {option}
                    </option>
                  ))}
                </Select>
                <Button
                  startIcon={<Save />}
                  onClick={showCroppedImage}
                  variant="contained"
                  color="primary"
                >
                  Save Avatar
                </Button>
                <Button
                  startIcon={<Delete />}
                  onClick={() => {
                    localStorage.removeItem(storageKey)
                    setOpen(false)
                  }}
                  variant="contained"
                  color="inherit"
                >
                  Clear Avatar
                </Button>
              </div>

              <div>
                <Cropper
                  cropShape="round"
                  cropSize={{ width: size, height: size }}
                  style={{
                    containerStyle: {
                      width: '100%',
                      height: 450,
                      marginTop: 240
                    }
                  }}
                  image={imageSrc}
                  crop={crop}
                  rotation={rotation}
                  zoom={zoom}
                  minZoom={minZoom}
                  aspect={1 / 1}
                  onCropChange={setCrop}
                  onRotationChange={setRotation}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </div>
            </Stack>
          ) : (
            <Box
              sx={{
                flex: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%'
              }}
            >
              <IconButton
                onClick={() => {
                  if (inputRef.current) inputRef.current.click()
                }}
              >
                <UploadFile
                  sx={{
                    fontSize: `min(25vw, 25vh, ${size}px)`
                  }}
                />
              </IconButton>
              <input
                style={{ display: 'none' }}
                hidden
                type="file"
                ref={inputRef}
                onChange={onFileChange}
                accept="image/*"
              />
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

AvatarPicker.defaultProps = AvatarPickerDefaults

export default AvatarPicker
