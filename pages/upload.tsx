import Button from '@components/Button'
import styled from '@emotion/styled'
import { METHODS } from 'http'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function ImageUpload() {
  const inputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState('')

  const handleUpload = () => {
    if (inputRef.current && inputRef.current.files) {
      const fd = new FormData()

      fd.append(
        'image',
        inputRef.current.files[0],
        inputRef.current.files[0].name
      )
      fetch(
        'https://api.imgbb.com/1/upload?expiration=600&key=340eff97531848cc7ed74f9ea0a716de',
        { method: 'POST', body: fd }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data)

          setImage(data.data.image.url)
        })
        .catch((error) => console.log(error))
    }
  }
  return (
    <div>
      <input ref={inputRef} type="file" accept="image/*" />
      <Button onClick={handleUpload}>업로드</Button>
      {image !== '' && (
        <AutoSizeImageWrapper>
          <Image
            src={image}
            alt="image"
            fill
            style={{ objectFit: 'contain' }}
          />
        </AutoSizeImageWrapper>
      )}
    </div>
  )
}

const AutoSizeImageWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
`
