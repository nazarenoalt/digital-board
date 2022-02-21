import React from 'react'
import { Wrapper } from './Board.style'
const Board = () => {
  const onDragHandler = e => {
    console.log('This is dragging')
  }
  
  return (
    <Wrapper>
      <div
        draggable
        className="box"
        onDragStart={onDragHandler}
      ></div>

    </Wrapper>
  )
}

export default Board