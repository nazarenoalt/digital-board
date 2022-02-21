import React from 'react'
import { Wrapper } from './Board.style'
const Board = () => {
  let offset = [0,0];
  let isDown = false;

  const onMouseDown = (e) => {
    isDown = true;
    offset = [
      e.target.offsetLeft - e.clientX,
      e.target.offsetTop - e.clientY,
    ]
  }

  const onMouseUp = (e) => {
    isDown = false;
  }

  const onMouseMove = (e) => {
    e.preventDefault()
    const box = e.currentTarget.querySelector('.box')

    if(isDown) {
      box.style.left = `${e.clientX + offset[0]}px`
      box.style.top = `${e.clientY + offset[1]}px`
    
    }
  }
  
  return (
    <Wrapper
        onMouseUpCapture={e => onMouseUp(e)}
        onMouseMoveCapture={e => onMouseMove(e)}
    >
      <div
        className="box"
        onMouseDownCapture={e => onMouseDown(e)}
      ></div>

    </Wrapper>
  )
}

export default Board