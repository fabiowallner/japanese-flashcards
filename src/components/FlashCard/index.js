import styled, {css} from 'styled-components'
import React, { useState, useEffect } from 'react';

const CardWrapper = styled.div`
    border: 1px solid #e0e0e0;
    width: 100%;
    height: 350px;
    border-radius: 12px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
	position: relative;
	transition: transform 0.6s ease-in-out;
    transform-style: preserve-3d;
    
    ${props => props.flipped && css`
        transform: rotateY(-180deg);
    `}
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

const Title = styled.div`
    font-size: 3rem;
`
const Subtitle = styled.div`
    font-size: 1.5rem;
    color: rgba(0,0,0,0.6);
`

const NextButton = styled.div`
    position: absolute;
    right: 30px;
    bottom: 30px;
    width: 40px;
    cursor: pointer;
    svg {
        width: 40px;
    }
`

const Button = styled.button`
    border: 2px solid #e3e3e3;
    width: 50px;
    padding: 5px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    margin: 0px 10px;
    cursor: pointer;
    background: transparent;
    transition: border-color 0.3s ease-in-out;
    outline: none;
`

const ButtonWrapper = styled.div`
    display: flex;
    position: absolute;
    bottom: 40px;
    justify-content: center;
`



function FlashCard(props) {

    const [flipped, setFlipped] = useState(false);

    return <CardWrapper flipped={flipped}>
        <CardSide front>
            <Title>{props.frontTitle}</Title>
            <NextButton onClick={() => {
                setFlipped(true);
            }}>
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
					<path d="M5 12h14M12 5l7 7-7 7" />
				</svg>
			</NextButton>
        </CardSide>
        <CardSide back>
            <Title>{props.backTitle}</Title>
            <Subtitle>{props.backSubtitle}</Subtitle>
            <Button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
            </Button>
            <Button>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </Button>
        </CardSide>
    </CardWrapper>
}

export default FlashCard;