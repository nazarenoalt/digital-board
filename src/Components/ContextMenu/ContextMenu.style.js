import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  min-width: 100px;
  top: ${props => `${props.top}px`};
  left: ${props => `${props.left}px`};
  background-color: rgba(0,0,0,0.5);

  ul {
    list-style: none;
    color: white;
    font-size: 1.2rem;
    line-height: 40px;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 10px 20px;
    cursor: pointer;
  }

  li:hover {
    background-color: rgba(0,0,0,0.2);
    filter: brightness(2)
  }
`;