import styled from "styled-components"

export default function HeaderComponent() {
    return (
        <Header>
            <a className="logo hvr-underline-from-center" href="/" >
                <img src="/img/logo.png" />
            </a>

            <a className="logoResp" href="/" >
                <img src="/img/af.png" />
            </a>
        </Header>
    )
}

const Header = styled.header`
    background-color: var(--primary-color);
    padding: 25px 20px 0;
    display: flex;
    justify-content: center;
    width: 100%;

    .logoResp{
        display:none;
    }

    .logo{
        max-width: 706px;
        width: 100%;
        img{
            width: 100%;
        }
    }
    

    .hvr-underline-from-center {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
        position: relative;
        overflow: hidden;
    }

    .hvr-underline-from-center:before {
        content: "";
        position: absolute;
        z-index: -1;
        left: 51%;
        right: 51%;
        bottom: 50px;
        background: #000;
        height: 1px;
        -webkit-transition-property: left, right;
        transition-property: left, right;
        -webkit-transition-duration: 0.3s;
        transition-duration: 0.3s;
        -webkit-transition-timing-function: ease-out;
        transition-timing-function: ease-out;
    }
    .hvr-underline-from-center:hover:before, .hvr-underline-from-center:focus:before, .hvr-underline-from-center:active:before {
        left: 0;
        right: 0;
    }

    @media(max-width:1250px){
        padding: 25px 120px 0;
        justify-content: flex-start;

        .logo{
            display:none;
        }

        .logoResp{
            display: flex;
            max-width: 200px;
            width: 100%;
            
            img{
                width: 100%;
            }
        }
    }

    @media(max-width: 760px){
        padding: 25px 95px 0;
        .logoResp{
            display: flex;
            max-width: 135px;
        }
    }

    @media(max-width:550px){
        padding: 25px 25px 0;

        
    }
`
