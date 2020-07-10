import styled from 'styled-components'
import Page from '../components/Page';
import FlashCard from '../components/FlashCard';

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
    margin-bottom: 100px;
    perspective: 1000px;
`

function HiraganaPage() {
    return (
        <Page title="Hiragana Trainer">
            <Title>Hiragana</Title>
            <FlashCardContainer>
                <FlashCard frontTitle="あ" backTitle="a" backSubtitle="あ" />
            </FlashCardContainer>
        </Page>
    )
}
  
export default HiraganaPage