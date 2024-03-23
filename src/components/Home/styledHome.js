import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #223a5f;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
`

export const ScoreCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px #ffffff solid;
  width: 80%;
  padding: 20px;
  border-radius: 10px;
`

export const Heading = styled.h1`
  color: ${props => props.color};
  font-family: 'Bree Serif';
`
export const Score = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  border-radius: 10px;
  width: 20%;
`

export const UnOrderList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  list-style-type: none;
  width: 80%;
`
export const ImgElement = styled.img`
  height: 200px;
  width: 200px;
  scr= ${props => props.src};
`

export const ParaText = styled.p`
  color: ${props => props.color};
  font-family: ${props => props.font};
  font-weight: bold;
`
