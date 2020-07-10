import styled, {css} from 'styled-components'

const CardWrapper = styled.div`
    border: 1px solid #e0e0e0;
    width: 100%;
    height: 350px;
    border-radius: 12px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
	position: relative;
	transition: transform 0.6s ease-in-out;
	transform-style: preserve-3d;
`

const CardSide = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    transform-style: preserve-3d;
    display: flex;
    justify-content: center;
    align-items: center;
    ${props => props.back && css`
        transform: rotateY(180deg);
  `}
`


function FlashCard() {
    return <CardWrapper>
        <CardSide front>FrontSide</CardSide>
        <CardSide back>BackSide</CardSide>
    </CardWrapper>
}

export default FlashCard;