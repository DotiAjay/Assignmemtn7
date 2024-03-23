import {GameButton, ImgElement} from './imageStyled'

const ImageItem = props => {
  const {ImgDetails, showGameResult} = props
  const {imageUrl, id} = ImgDetails
  const test = id.toLowerCase()
  const ImgSelection = () => {
    showGameResult(id)
  }
  console.log(`${test}Button`)
  return (
    <li>
      <GameButton data-testid={`${test}Button`} onClick={ImgSelection}>
        <ImgElement src={imageUrl} alt={id} />
      </GameButton>
    </li>
  )
}

export default ImageItem
