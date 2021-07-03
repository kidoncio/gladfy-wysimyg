import { Extension } from '@tiptap/core'
import '@tiptap/extension-text-style'

export const Color = Extension.create({
  name: 'color',

  defaultOptions: {
    types: ['textStyle'],
  },

  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          color: {
            default: null,
            renderHTML: (attributes) => {
              if (!attributes.color) return {}

              return {
                style: `color: ${attributes.color}`,
              }
            },
            parseHTML: (element) => ({
              color: element.style.color.replace(/['"]+/g, ''),
            }),
          },
        },
      },
    ]
  },

  // @ts-ignore
  addCommands() {
    return {
      setColor:
        (color: any) =>
        ({ chain }: any) => {
          chain()
            .setMark('textStyle', {
              hasColor: true,
            })
            .run()

          return chain().setMark('textStyle', { color }).run()
        },
      unsetColor:
        () =>
        ({ chain }: any) => {
          chain()
            .setMark('textStyle', {
              hasColor: false,
            })
            .run()

          return chain().setMark('textStyle', { color: null }).removeEmptyTextStyle().run()
        },
    }
  },
})
