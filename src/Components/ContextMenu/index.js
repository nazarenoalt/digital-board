import React from 'react'
import { Wrapper } from './ContextMenu.style'

const ContextMenu = ({
  top,
  left,
  elementsArray,
  setElementsArray
}) => {

  const handleElementsArray = (e) => {
    setElementsArray(prevState => {
      const type = e.target.getAttribute("type");
      let newObject;
      if(type === "text") {
        newObject = {
          type: type,
          id: Math.floor(Math.random() * 10000),
          content:"insert text",
          color: "black",
          fontSize: 16,
          background: "none"
        }
      } if(type === "rectangle") {
        newObject = {
          type: type,
          id: Math.floor(Math.random() * 10000),
          color: "black",
          background: "none",
          width:100,
          height:100,
          weight: 2,
        }
      } if(type === "circle") {
        newObject = {
          type: type,
          id: Math.floor(Math.random() * 10000),
          color: "black",
          background: "none",
          width:100,
          height:100,
          weight: 2,
          borderRadius: true,
        }
      }

      return [
        ...prevState,
        newObject,
      ]
    })
  }

  return (
    <Wrapper top={top} left={left}>
      <ul>
        <li
          type="text"
          onClick={e => handleElementsArray(e)}
        >Text</li>

        <li
          type="rectangle"
          onClick={e => handleElementsArray(e)}
        >Rectangle</li>

        <li
          type="circle"
          onClick={e => handleElementsArray(e)}
        >Circle</li>
      </ul>
    </Wrapper>
  )
}

export default ContextMenu