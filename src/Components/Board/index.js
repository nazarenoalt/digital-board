import React, { useState } from 'react'
import ContextMenu from '../ContextMenu';
import { Wrapper } from './Board.style'
const Board = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState([0,0]);
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

  const onContextMenu = (e) => {
    e.preventDefault();
    setMenuPosition([e.pageY, e.pageX])
    setActiveMenu(true)                                       
  }
  return (
    <Wrapper
        onMouseUpCapture={e => onMouseUp(e)}
        onMouseMoveCapture={e => onMouseMove(e)}
        onContextMenu={e => onContextMenu(e)}
        onClick={() => activeMenu && setActiveMenu(false)}
    >
      <div
        className="box"
        onMouseDownCapture={e => onMouseDown(e)}
      ></div>
    {activeMenu && <ContextMenu top={menuPosition[0]} left={menuPosition[1]} />}
    </Wrapper>
  )
}

export default Board