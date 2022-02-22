import React from 'react'
import { Wrapper } from './ContextMenu.style'

const ContextMenu = ({ top, left }) => {
  return (
    <Wrapper top={top} left={left}>
      <ul>
        <li>Text</li>
        <li>Rectangle</li>
        <li>Circle</li>
      </ul>
    </Wrapper>
  )
}

export default ContextMenu