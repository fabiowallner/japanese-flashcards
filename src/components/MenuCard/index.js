import styled, {css} from 'styled-components'
import Link from 'next/link'

const CardWrapper = styled.div`
    border: 1px solid #e0e0e0;
    width: 100%;
    
    border-radius: 12px;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
    position: relative;
    transition: transform 0.6s ease-in-out;
    transform-style: preserve-3d;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`

const Button = styled.a`
    align-self: flex-end;
    background: transparent;
    border: 2px solid #e3e3e3;
    border-radius: 6px;
    padding: 10px 20px;
    margin-top: 20px;
    color: rgba(0,0,0,0.6);
    outline: none;
    cursor: pointer;
    transition: border-color 0.3s ease-in-out, color 0.3s ease-in-out;
    font-size: 1rem;

    &:hover {
        border-color: black;
        color: rgba(0,0,0,1)
    }
`

const CardMedia = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: #e3e3e3;
    font-size: 2rem;
`
const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 25px 25px;
`

const CardTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 5px;
`

const CardDescription = styled.p`
    font-size: 1rem;
`



function MenuCard({className, media, title, description, link}) {
    return (
        <CardWrapper className={className}>
            <CardMedia>{media}</CardMedia>
            <CardContent>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
                <Link href={link}>
                    <Button>Start</Button>
                </Link>
            </CardContent>
        </CardWrapper>
    )
}

export default MenuCard