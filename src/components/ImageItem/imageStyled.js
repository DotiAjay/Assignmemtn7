import styled from 'styled-components'

export const GameButton = styled.button`
  border: none;
  background-color: transparent;
`

export const ImgElement = styled.img`
  height: 200px;
  width: 200px;
  scr= ${props => props.src};
`
