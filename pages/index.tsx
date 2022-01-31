import styled from "styled-components"
import Card from '../components/cards'
import Header from '../components/layout/header'

export default function HomePage() {
    return (
        <>
            <Header/>
            <Body>
                <div>
                    <Card title="Skills" url="/skills"/>
                    <Card title="Experiência" url="/experience"/>
                    <Card title="Contato" url="/contact"/>

                </div>
            </Body>
        </>
    )
}

const Body = styled.section`
    background-color: var(--primary-color);
    padding: 115px 95px 50px;
    height: calc(100vh - 183px);

    div{
        display: flex;
        justify-content: space-between;
    }

    @media(max-width:1250px){
        padding: 0 95px 50px;
        height: 100vh;
        div{
            flex-direction: column;
            align-items: center;
            max-height: 600px;
            height: 100%;
        }
    }

    @media(max-width:800px){
        padding: 35px 95px 50px;
        height: 100vh ;
    }

    @media(max-width:550px){
        padding: 35px 25px 50px;
    }
`

