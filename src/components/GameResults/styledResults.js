import styled from 'styled-components'

export const Heading = styled.h1`
  color: ${props => props.color};
  font-family: 'Bree Serif';
`
export const ImgElement = styled.img`

 height:200px;
 width:200px;
 scr=${props => props.src};
`
export const ParaText = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-weight: bold;
`
export const ImgContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.direction};
`

export const ButtonEle = styled.button`
  height: 50px;
  width: 120px;
  border-radius: 2px;
  padding: 2px;
  font-family: 'Bree Serif';
`
