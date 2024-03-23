import {Component} from 'react'
import {
  Heading,
  ImgElement,
  ParaText,
  ImgContainer,
  ButtonEle,
} from './styledResults'

class GameResults extends Component {
  render() {
    const {text, userImg, opponentImg, playagain} = this.props

    const playagainbut = () => {
      playagain()
    }
    return (
      <div>
        <ImgContainer direction="row">
          <ImgContainer direction="column">
            <Heading color="#ffffff">You</Heading>
            <ImgElement src={userImg} alt="your choice" />
          </ImgContainer>
          <ImgContainer direction="column">
            <Heading color="#ffffff">Opponent</Heading>
            <ImgElement src={opponentImg} alt="opponent choice" />
          </ImgContainer>
        </ImgContainer>
        <ParaText color="#ffffff">{text}</ParaText>
        <ButtonEle onClick={playagainbut}>PLAY AGAIN</ButtonEle>
      </div>
    )
  }
}

export default GameResults
