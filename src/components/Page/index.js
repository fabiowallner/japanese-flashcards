import styled from "styled-components"
import PageFooter from "./PageFooter"
import Head from 'next/head';

const PageWrapper = styled.div`
    padding: 0px 25px;
`

function Page({title, children}) {

    const pageTitle = title ? `JFT - ${title}` : `JFT`;
    return (
    <>
        <Head>
            <title>{pageTitle}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <PageWrapper>
            {children}
        </PageWrapper>
        <PageFooter />
    </>
    )
}

export default Page