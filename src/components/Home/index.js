import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import GameResults from '../GameResults/index'

import {
  MainContainer,
  ScoreCard,
  Heading,
  Score,
  UnOrderList,
  ImgElement,
  ParaText,
} from './styledHome'
import ImageItem from '../ImageItem/index'

class Home extends Component {
  state = {
    score: 0,
    gameOver: false,
    currentId: '',
    text: '',
    userImg: '',
    opponentImg: '',
  }

  playagain = () => {
    this.setState({gameOver: false})
  }

  logic = (playerVal, computerVal) => {
    if (playerVal === computerVal) {
      return 0
    } else if (playerVal === 'ROCK' && computerVal === 'SCISSORS') {
      return 1
    } else if (playerVal === 'SCISSORS' && computerVal === 'PAPER') {
      return 1
    } else if (playerVal === 'PAPER' && computerVal === 'ROCK') {
      return 1
    }
    return -1
  }

  showGameResult = currentId => {
    console.log('called')
    const {choicesList} = this.props
    const {score} = this.state
    const imglink = choicesList.filter(each => each.id === currentId)

    const val = Math.floor((Math.random() * 10) % 3)
    const OpponentId = choicesList[val].id
    const logic = this.logic(currentId, OpponentId)
    let hell
    let newScore
    if (logic === 1) {
      hell = 'YOU WON'
      newScore = score + 1
    } else if (logic === -1) {
      hell = 'YOU LOSE'
      newScore = score - 1
    } else {
      hell = 'IT IS DRAW'
      newScore = score + 0
    }
    this.setState({
      userImg: imglink[0].imageUrl,
      opponentImg: choicesList[val].imageUrl,
      text: hell,
      score: newScore,
      gameOver: true,
    })
  }

  render() {
    const {choicesList} = this.props
    const {gameOver, score, text, userImg, opponentImg} = this.state

    return (
      <MainContainer>
        <ScoreCard>
          <Heading color="#ffffff">Rock Paper Scissors</Heading>
          <Score>
            <ParaText color="#223a5f" font="Bree Serif">
              Score
            </ParaText>
            <ParaText color="#223a5f" font="Roboto">
              {score}
            </ParaText>
          </Score>
        </ScoreCard>
        <div>
          {gameOver ? (
            <GameResults
              text={text}
              userImg={userImg}
              opponentImg={opponentImg}
              showGameResult={this.showGameResult}
              playagain={this.playagain}
            />
          ) : (
            <UnOrderList>
              {choicesList.map(each => (
                <ImageItem
                  ImgDetails={each}
                  key={each.id}
                  onSelectingImg={this.onSelectingImg}
                  showGameResult={this.showGameResult}
                />
              ))}
            </UnOrderList>
          )}
        </div>
        <div>
          <Popup modal trigger={<button>Rules</button>} position="right center">
            {close => (
              <>
                <button type="button" onClick={() => close()}>
                  <RiCloseLine aria-label="close" />
                </button>
                <div>
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                    alt="rules"
                  />
                </div>
              </>
            )}
          </Popup>
        </div>
      </MainContainer>
    )
  }
}

export default Home
