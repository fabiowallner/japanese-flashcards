import styled from 'styled-components'
import Menu from '../components/Menu';
import Page from '../components/Page';

const Title = styled.h1`
    font-size: 2rem;
    color: rgba(0,0,0,0.8);
    text-align: center;
    margin-bottom: 50px;
    padding-top: 25px;
`

function Index() {
    return (
        <Page title="Home">
            <Title>Japanese Flashcard Trainer</Title>
            <Menu />
        </Page>
    )
}
  
export default Index