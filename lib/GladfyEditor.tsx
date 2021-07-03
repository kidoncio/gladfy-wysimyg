import React from 'react'
import { AnyExtension, Content, EditorContent, useEditor } from '@tiptap/react'
import { Editor } from '@tiptap/core/dist/packages/core/src/Editor'
import StarterKit from '@tiptap/starter-kit'
import { Color, ImageBlockConfig } from './plugins'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Link from '@tiptap/extension-link'
import { Transaction } from 'prosemirror-state'

interface Props {
  editable?: boolean
  content?: Content
  extensions?: AnyExtension[]
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
  extensions = [],
}: Props) => {
  const editor = useEditor({
    content,
    editable,
    // @ts-ignore
    extensions: [StarterKit, Color, TextStyle, TextAlign, Link, ImageBlockConfig(), ...extensions],
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
