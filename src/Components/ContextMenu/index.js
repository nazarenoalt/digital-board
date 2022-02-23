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
      console.log(prevState)
      const newObject = {
        type: e.target.getAttribute("type"),
        id: Math.floor(Math.random() * 10000),
        color: "black",
        fontSize: 16,
        background: "none"
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