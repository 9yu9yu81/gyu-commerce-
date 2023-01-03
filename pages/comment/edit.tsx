import AutoSizeImage from '@components/AutoSizeImage'
import Button from '@components/Button'
import CustomEditor from '@components/Editor'
import { Slider } from '@mantine/core'
import { IconFile } from '@tabler/icons'
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

export default function Products() {
  const router = useRouter()
  const [rate, setRate] = useState(5)
  const [images, setImages] = useState<string[]>([])
  const { orderItemId } = router.query
  const [editorState, setEditorState] = useState<EditorState | undefined>(
    undefined
  )
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (orderItemId != null) {
      fetch(`/api/get-comment?orderItemId=${orderItemId}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.items.contents) {
            setEditorState(
              EditorState.createWithContent(
                convertFromRaw(JSON.parse(data.items.contents))
              )
            )
            setRate(data.items.rate)
            setImages(data.items.images.split(',') ?? [])
          } else {
            setEditorState(EditorState.createEmpty())
          }
        })
    }
  }, [orderItemId])

  const handleSave = () => {
    if (editorState && orderItemId != null) {
      fetch('/api/update-comment', {
        method: 'POST',
        body: JSON.stringify({
          orderItemId: Number(orderItemId),
          rate: rate,
          contents: JSON.stringify(
            convertToRaw(editorState.getCurrentContent())
          ),
          images: images.join(','),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.message)
          router.back()
        })
    }
  }
  const handleChange = () => {
    if (
      inputRef.current &&
      inputRef.current.files &&
      inputRef.current.files.length > 0
    ) {
      for (let i = 0; i < inputRef.current.files.length; i++) {
        const fd = new FormData()

        fd.append(
          'image',
          inputRef.current.files[i],
          inputRef.current.files[i].name
        )
        fetch(
          'https://api.imgbb.com/1/upload?expiration=600&key=340eff97531848cc7ed74f9ea0a716de',
          { method: 'POST', body: fd }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data)

            setImages((prev) =>
              Array.from(new Set(prev.concat(data.data.image.url)))
            )
          })
          .catch((error) => console.log(error))
      }
    }
  }

  return (
    <>
      <div className="m-3">
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={handleChange}
        />
        <div className="flex mt-3 space-x-3">
          {images &&
            images.length > 0 &&
            images.map((image, idx) => <AutoSizeImage key={idx} src={image} />)}
        </div>
      </div>
      {editorState != null && (
        <CustomEditor
          editorState={editorState}
          onEditorStateChange={setEditorState}
          onSave={handleSave}
        />
      )}
      <Slider
        defaultValue={5}
        max={5}
        min={1}
        step={1}
        value={rate}
        onChange={setRate}
        marks={[
          { value: 1 },
          { value: 2 },
          { value: 3 },
          { value: 4 },
          { value: 5 },
        ]}
      />
    </>
  )
}
