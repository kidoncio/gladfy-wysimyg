import React, { useEffect } from 'react'
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react'
import { Editor } from '@tiptap/core/dist/packages/core/src/Editor'
import axios from 'axios'
import { MediumImage } from '../../components/MediumImage'
import {
  DivContainerStyled,
  DivImageCaptionContendSpan,
  DivImageCaptionStyled,
} from './ImageStyles'

interface Props {
  editor: Editor
}

export const ImageComponent = (props: Props & any) => {
  console.log('imageBlock props -> ', props.editor.isEditable)

  const imageUrl = props.node.attrs.url || props.node.attrs.src

  let img = null
  let file = null

  useEffect(() => {
    replaceImg()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function setImage(url: any) {
    props.updateAttributes({
      url: url,
    })
  }

  function replaceImg() {
    let img = new Image()

    img.src = imageUrl //props.node.attrs.src;

    // setImage(img.src)

    // exit only when not blob and not forceUload
    //if (!img.src.includes("blob:") && !props.node.attrs.forceUpload) {
    //  return;
    //}

    //if(props.node.attrs.aspect_ratio) return
    img.onload = () => {
      props.updateAttributes({
        width: img.width,
        height: img.height,
        aspect_ratio: getAspectRatio(img.width, img.height),
      })

      return handleUpload()
    }
  }

  function startLoader() {
    props.updateAttributes({
      loading: true,
    })
  }

  function stopLoader() {
    props.updateAttributes({
      loading: false,
    })
  }

  function handleUpload() {
    startLoader()
    uploadFile()
  }

  function formatData() {
    let formData = new FormData()
    if (props.node.attrs.file) {
      let formName = props.extension.options.upload_formName || 'file'

      formData.append(formName, props.node.attrs.file)
      return formData
    } else {
      // TODO: check this
      formData.append('url', props.node.attrs.src)
      return formData
    }
  }

  function uploadFile() {
    // custom upload handler
    if (props.extension.options.upload_handler) {
      return props.extension.options.upload_handler(formatData().get('file'), props)
    }

    if (!props.extension.options.upload_url) {
      stopLoader()
      return
    }

    //this.props.blockProps.addLock()

    function getUploadUrl() {
      const url = props.extension.options.upload_url

      if (typeof url === 'function') {
        return url()
      } else {
        return url
      }
    }

    function getUploadHeaders() {
      return props.extension.options.upload_headers || {}
    }

    axios({
      method: 'post',
      url: getUploadUrl(),
      headers: getUploadHeaders(),
      data: formatData(),
      onUploadProgress: (e: any) => {
        return updateProgressBar(e)
      },
    })
      .then((result: { data: { url: any } }) => {
        uploadCompleted(result.data.url)
        if (props.extension.options.upload_callback) {
          return props.extension.options.upload_callback(result, props)
        }
      })
      .catch((error: any) => {
        //this.uploadFailed()
        console.log(`ERROR: got error uploading file ${error}`)
        if (props.extension.options.upload_error_callback) {
          return props.extension.options.upload_error_callback(error, props)
        }
      })

    return (json_response: { url: any }) => {
      // return uploadCompleted("https://i.imgur.com/XUWx1hA.jpeg");
      return uploadCompleted(json_response.url)
    }
  }

  function uploadCompleted(url: any) {
    setImage(url)
    stopLoader()

    file = null
  }

  function updateProgressBar(e: { lengthComputable: any; loaded: number; total: number }) {
    let complete = props.node.attrs.loading_progress
    if (e.lengthComputable) {
      complete = (e.loaded / e.total) * 100
      complete = complete != null ? complete : { complete: 0 }
      props.updateAttributes({ loading_progress: complete })
      console.log(`complete: ${complete}`)
    }
  }

  function getAspectRatio(w: number, h: number) {
    let maxWidth = 1000
    let maxHeight = 1000
    let ratio = 0
    let width = w // Current image width
    let height = h // Current image height

    // Check if the current width is larger than the max
    if (width > maxWidth) {
      ratio = maxWidth / width // get ratio for scaling image
      height = height * ratio // Reset height to match scaled image
      width = width * ratio // Reset width to match scaled image

      // Check if current height is larger than max
    } else if (height > maxHeight) {
      ratio = maxHeight / height // get ratio for scaling image
      width = width * ratio // Reset width to match scaled image
      height = height * ratio // Reset height to match scaled image
    }

    let fill_ratio = (height / width) * 100
    let result = { width, height, ratio: fill_ratio }
    // console.log result
    return result
  }

  function setActive() {
    props.editor.commands.setNodeSelection(props.getPos())
  }

  function handleClick(e: any) {
    setActive()
  }

  function directionClass() {
    switch (props.node.attrs.direction) {
      case 'left':
        return 'graf--layoutOutsetLeft'
      case 'center':
        return ''
      case 'wide':
        return 'sectionLayout--fullWidth'
      case 'fill':
        return 'graf--layoutFillWidth'
      default:
        return ''
    }
  }

  function parseAspectRatio() {
    if (typeof props.node.attrs.aspect_ratio === 'string') {
      try {
        return JSON.parse(props.node.attrs.aspect_ratio)
      } catch (error) {
        return {}
      }
    } else {
      return props.node.attrs.aspect_ratio
    }
  }

  const { width, height, ratio } = parseAspectRatio()

  return (
    <NodeViewWrapper selected={props.selected}>
      <DivContainerStyled onClick={handleClick} maxWidth={width} maxHeight={height}>
        <div style={{ paddingBottom: `${ratio}%` }} />

        <MediumImage
          src={imageUrl}
          height={width}
          width={height}
          className={`graf-image ${props.editor.isEditable ? '.no-zoom' : ''}`}
          editable={props.editor.isEditable}
        />
      </DivContainerStyled>

      <DivImageCaptionStyled>
        <NodeViewContent as={'figcaption'}>
          {props.node.content.size === 0 && (
            <DivImageCaptionContendSpan editable={props.editor.isEditable}>
              type a caption (optional)
            </DivImageCaptionContendSpan>
          )}
        </NodeViewContent>
      </DivImageCaptionStyled>
    </NodeViewWrapper>
  )
}
