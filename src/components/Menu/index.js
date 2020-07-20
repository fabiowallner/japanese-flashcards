import MenuCard from "../MenuCard"
import styled from "styled-components"

const MenuItem = styled(MenuCard)`
    margin-bottom: 35px;
`

const MenuWrapper = styled.div`
    padding-bottom: 70px;
`

function Menu() {
    return (
        <MenuWrapper>
            <MenuItem media="ひらがな" title="Hiragana" description="Learn all Hiragana characters" link="/hiragana" />
            <MenuItem media="カタカナ" title="Katakana" description="Learn all 46 Katakana characters" link="/hiragana" />
            <MenuItem media="WORDS" title="Words" description="Train 25 out of 1000 most popular words" link="/words" />
        </MenuWrapper>
    )
}

export default Menu