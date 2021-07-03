import { mergeAttributes, Node, ReactNodeViewRenderer } from '@tiptap/react'
import { ImageComponent } from './ImageComponent'

export const ImageExtension = Node.create({
  name: 'gladfyImage',
  group: 'block',
  atom: true,
  addAttributes: () => {
    return {
      url: { default: null },
      src: { default: null },
      width: { default: '' },
      height: { default: '' },
      loading: { default: false },
      loading_progress: { default: 0 },
      caption: { default: 'caption!' },
      direction: { default: 'center' },
      file: { default: null },
      aspect_ratio: {
        default: {
          width: 200,
          height: 200,
          ratio: 100,
        },
      },
    }
  },
  parseHTML: () => {
    return [
      {
        tag: 'gladfy-image',
      },
      {
        tag: 'img[src]',
      },
    ]
  },
  renderHTML: ({ HTMLAttributes }) => {
    return ['gladfy-image', mergeAttributes(HTMLAttributes)]
  },
  addNodeView: () => {
    return ReactNodeViewRenderer(ImageComponent)
  },
  dataSerializer: (data: any) => {
    return {
      ...data,
      aspect_ratio: JSON.stringify(data.aspect_ratio),
      file: null,
    }
  },
  keyboardShortcuts: (editor: any) => {
    return {
      Enter: ({ editor }: any) => {
        if (editor.isActive('GladfyImage')) {
          editor.commands.insertContent({
            type: 'paragraph',
          })

          editor.chain().focus().toggleNode('paragraph', 'paragraph', {}).run()
          return true
        }
      },
    }
  },
})
