import styled from 'styled-components'
import Page from '../components/Page';
import FlashCard from '../components/FlashCard';
import Hiragana from "../content/hiragana.json";
import { useEffect, useState } from 'react';
import { shuffleArray } from '../lib/arrayFunctions';

const Title = styled.h1`
    font-size: 2rem;
    color: rgba(0,0,0,0.8);
    text-align: center;
    margin-bottom: 50px;
    padding-top: 25px;
`

const FlashCardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    perspective: 1000px;
    height: 100%;
    width: 100%;
`

const FlashCardWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding-bottom: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    transform: translate3d(0, -50px, -300px);
    transform-style: preserve-3d;
    transition: transform 0.5s ease-in-out;
    &:nth-child(1) {
        z-index: 5;
        transform: translate3d(0, 0px, 0px);

        & > div {
            box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
        }
    } 

    &:nth-child(2) {
        z-index: 4;
        transform: translate3d(0, -10px, -300px);
    }

    &:nth-child(3) {
        z-index: 3;
        transform: translate3d(0, -20px, -300px);
    } 

    &:nth-child(4) {
        z-index: 2;
        transform: translate3d(0, -30px, -300px);
    }

    &:nth-child(5) {
        z-index: 1;
        transform: translate3d(0, -40px, -300px);
    } 
`

function HiraganaPage() {
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    // const randomCardID = Math.floor(Math.random() * deck.length);
    // console.log(randomCardID)
    console.log('on mount');
    const newDeck = shuffleArray(Hiragana);
    console.log(newDeck);
    setDeck(newDeck);
  }, []);

  const yesClick = (id) => {
    const newDeck = [... deck];
    newDeck.splice(id, 1);
    setDeck(newDeck);
  }

  const noClick = (id) => {
    const newDeck = [... deck];
    const noItem = newDeck.splice(id, 1);
    setDeck(newDeck.concat(noItem));
  }


  return (
    <Page title="Hiragana Trainer">
      <Title>Hiragana</Title>
      <FlashCardContainer>
        {
          deck.map((card, index) => {
            return (
            <FlashCardWrapper key={`index-${card.question.title}`} >
              <FlashCard 
                frontTitle={card.question.title}
                backTitle={card.answer.title}
                backSubtitle={card.answer.subtitle}
                onYesClick={() => {
                  yesClick(index);
                }}
                onNoClick={() => {
                  noClick(index);
                }}
              />
            </FlashCardWrapper>
            )
          })
        }

      </FlashCardContainer>
    </Page>
  )
}

export default HiraganaPage