import styled from "styled-components";

const FooterWrapper = styled.footer`
    border-top: 1px solid #e3e3e3;
    padding: 25px;
    margin-top: auto;
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
    width: 100%;
    height: 70px;
`


function PageFooter() {
    return <FooterWrapper>Copyright 2020 Fabio Wallner</FooterWrapper>
}

export default PageFooter;