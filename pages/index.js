import styled from 'styled-components'

const Title = styled.h1`
font-size: 50px;
color: ${({ theme }) => theme.colors.primary};
`

function Index() {
    return <Title>Welcome to Next.js!</Title>
}
  
export default Index