import React, { useEffect, useRef } from 'react'
import mediumZoom from 'medium-zoom'

type Props = JSX.IntrinsicElements['img'] & {
  editable?: boolean
}

export const MediumImage = (props: Props) => {
  const { editable, alt } = props

  const imgRef = useRef<HTMLImageElement>(document.createElement('img') as HTMLImageElement)
  const zoomRef = useRef(mediumZoom())

  useEffect(() => {
    if (!editable) {
      zoomRef.current.attach(imgRef.current)

      return
    }

    zoomRef.current.detach(imgRef.current)
  }, [editable])

  // eslint-disable-next-line @next/next/no-img-element
  return <img ref={imgRef} {...props} alt={alt} />
}
