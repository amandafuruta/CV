import styled from "styled-components"
import Card from '../components/cards'
import Header from '../components/layout/header'

export default function HomePage() {
    return (
        <>
            <Header/>
            <Body>
                <Card title="Skills" url="/skills"/>
                <Card title="Experiência" url="/experience"/>
                <Card title="Contato" url="/contact"/>
            </Body>
        </>
    )
}

const Body = styled.section`
    background-color: var(--primary-color);
    padding: 115px 95px 50px;;
    display: flex;
    justify-content: space-between;
    height: calc(100vh - 183px);
`

