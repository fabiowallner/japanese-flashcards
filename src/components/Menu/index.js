import MenuCard from "../MenuCard"
import styled from "styled-components"

const MenuItem = styled(MenuCard)`
    margin-bottom: 35px;
`

function Menu() {
    return (
        <div>
            <MenuItem media="ひらがな" title="Hiragana" description="Learn all Hiragana characters" link="/hiragana" />
            <MenuItem media="カタカナ" title="Katakana" description="Learn all 46 Katakana characters" link="/hiragana" />
        </div>
    )
}

export default Menu