import React from 'react'
import { AnyExtension, Content, EditorContent, useEditor } from '@tiptap/react'
import { Editor } from '@tiptap/core/dist/packages/core/src/Editor'
import StarterKit from '@tiptap/starter-kit'
import { Color, ImageExtension } from './plugins'
import TextStyle from '@tiptap/extension-text-style'
import FontFamily from '@tiptap/extension-font-family'
import TextAlign from '@tiptap/extension-text-align'
import Link from '@tiptap/extension-link'
import { Transaction } from 'prosemirror-state'

interface Props {
  /**
   * The editable property determines if users can write into the editor.
   *
   * @default true
   */
  editable?: boolean
  /**
   * With the content property you can provide the initial content for the editor. This can be HTML or JSON.
   *
   * @default '<p>Hello there...</p>'
   */
  content?: Content
  /**
   * A list of tiptap extensions to the extensions property.
   * You can see the full list here: https://www.tiptap.dev/api/extensions/
   *
   * @default [StarterKit,Color,TextStyle,FontFamily,TextAlign,Link,ImageBlockConfig]
   */
  extensions?: AnyExtension[]
  /**
   * By default, tiptap injects a little bit of CSS. With injectCSS you can disable that.
   *
   * @default true
   */
  injectCSS?: boolean
  onBeforeCreate?: (props: { editor: Editor }) => void
  onCreate?: (props: { editor: Editor }) => void
  onUpdate?: (props: { editor: Editor }) => void
  onSelectionUpdate?: (props: { editor: Editor }) => void
  onTransaction?: (props: { editor: Editor; transaction: Transaction }) => void
  onFocus?: (props: { editor: Editor; event: FocusEvent }) => void
  onBlur?: (props: { editor: Editor; event: FocusEvent }) => void
  onDestroy?: () => void
}

export const GladfyEditor = ({
  editable = true,
  content = '<p>Hello there...</p>',
  onBeforeCreate,
  onCreate,
  onUpdate,
  onSelectionUpdate,
  onTransaction,
  onFocus,
  onBlur,
  onDestroy,
  injectCSS = true,
  extensions = [],
}: Props) => {
  const editor = useEditor({
    content,
    editable,
    injectCSS,
    extensions: [
      StarterKit,
      Color,
      TextStyle,
      FontFamily,
      TextAlign,
      Link,
      ImageExtension,
      ...extensions,
    ],
    onBeforeCreate: ({ editor }) => {
      if (onBeforeCreate) onBeforeCreate({ editor })
    },
    onCreate: ({ editor }) => {
      if (onCreate) onCreate({ editor })
    },
    onUpdate: ({ editor }) => {
      if (onUpdate) onUpdate({ editor })
    },
    onSelectionUpdate: ({ editor }) => {
      if (onSelectionUpdate) onSelectionUpdate({ editor })
    },
    onTransaction: ({ editor, transaction }) => {
      if (onTransaction) onTransaction({ editor, transaction })
    },
    onFocus: ({ editor, event }) => {
      if (onFocus) onFocus({ editor, event })
    },
    onBlur: ({ editor, event }) => {
      if (onBlur) onBlur({ editor, event })
    },
    onDestroy: () => {
      if (onDestroy) onDestroy()
    },
  })

  return <EditorContent editor={editor} />
}
