import styled from 'styled-components'
import Flashcard from '../components/flashcard'

const Title = styled.h1`
    font-size: 2rem;
    color: rgba(0,0,0,0.8);
    text-align: center;
`

function Index() {
    return (
        <div>
            <Title>Japanese Flashcard Trainer</Title>
            <Flashcard/>
        </div>
    )
}
  
export default Index