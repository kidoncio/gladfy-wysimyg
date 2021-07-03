import { math } from 'polished'
import styled from 'styled-components'

interface DivContainerStyledProps {
  maxWidth: number
  maxHeight: number
}

export const DivContainerStyled = styled.div<DivContainerStyledProps>`
  margin: 0 auto;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  max-width: ${({ maxWidth }) => maxWidth};
  max-height: ${({ maxHeight }) => maxHeight};
`

export const DivImageCaptionStyled = styled.div`
  text-align: center;
  margin-top: 0;
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
    Noto Color Emoji;
  letter-spacing: 0;
  font-weight: 400;
  font-size: 13px;
  line-height: 1.4;
  outline: 0;
  z-index: 300;
  margin-top: 10px;
`

interface DivImageCaptionContendSpanProps {
  editable: boolean
}

export const DivImageCaptionContendSpan = styled.span<DivImageCaptionContendSpanProps>`
  margin-bottom: -18px !important;
  display: ${({ editable }) => (editable ? 'block' : 'none')};
`
