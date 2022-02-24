import React, { useState } from 'react'
import ContextMenu from '../ContextMenu';
import { Wrapper } from './Board.style'
const Board = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState([0,0]);
  const [elementsArray, setElementsArray] = useState([
    { id:1, type:"text", content:"element one", color:"black", fontSize:16, fontWeight:"regular" }
  ])
  const [selectedItem, setSelectedItem] = useState(0)

  let offset = [0,0];
  let isDown = false;

  const onMouseDown = (e) => {
    const itemId = e.currentTarget.getAttribute("id");
    setSelectedItem(itemId);
    isDown = true;
    offset = [
      e.currentTarget.offsetLeft - e.clientX,
      e.currentTarget.offsetTop - e.clientY,
    ]
  }

  const onMouseUp = (e) => {
    isDown = false;
  }

  const onMouseMove = (e) => {
    e.preventDefault()
    if(isDown) {
      const box = e.target.querySelector(`#${selectedItem}`)
      console.log(box)
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
      {elementsArray.map(element => {
        return (
          <div
             onMouseDownCapture={e => onMouseDown(e)}
            id={"id" + element.id}
            key={element.id}
          >
            {element.type === "text" && <p>{element.content}</p>}
            {element.type === "rectangle" && <div 
             
              style={{
                position: "absolute",
                width:`${element.width}px`,
                height: `${element.height}px`,
                border: `${element.weight}px solid ${element.color}`,
                }}>{element.content}</div>}
          </div>
        )
      })}
    {activeMenu && <ContextMenu
      top={menuPosition[0]}
      left={menuPosition[1]}
      elementsArray={elementsArray}
      setElementsArray={setElementsArray}
    />}
    </Wrapper>
  )
}

export default Board