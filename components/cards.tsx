import styled from "styled-components";

export default function Card(props:any){
    return(
        <CardStyle>
            
                <a href={props.url} className="card hvr-bob ">
                    <h2 className={props.title=='Experiência'? "title3-medium": "title2-medium"} style={{top: props.title=='Experiência'? '35%' : '32%', left: props.title=='Experiência'? '31%' : '35%' }}>{props.title}</h2>
                </a>
            
        </CardStyle>
    )
}

const CardStyle = styled.div`
    max-width: 340px;
    width: 100%;

    .card{
        background-image: url("/img/teste.jpg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        width: 100%;
        border-radius: 20px;
        height: 175px;
        display: flex;
        align-items: center;
        justify-content: center; 

        h2{  
            position: relative;
            display: inline;
            color: #000;
        }

    }
        
    @-webkit-keyframes hvr-bob {
        0% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
        }
        50% {
            -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
        }
        100% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
        }
    }

    @keyframes hvr-bob {
        0% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
        }
        50% {
            -webkit-transform: translateY(-4px);
            transform: translateY(-4px);
        }
        100% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
        }
    }

    @-webkit-keyframes hvr-bob-float {
        100% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
        }
    }

    @keyframes hvr-bob-float {
        100% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
        }
    }

    .hvr-bob {
        display: inline-block;
        vertical-align: middle;
        -webkit-transform: perspective(1px) translateZ(0);
        transform: perspective(1px) translateZ(0);
        box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    }
    .hvr-bob:hover, .hvr-bob:focus, .hvr-bob:active {
        -webkit-animation-name: hvr-bob-float, hvr-bob;
        animation-name: hvr-bob-float, hvr-bob;
        -webkit-animation-duration: .3s, 1.5s;
        animation-duration: .3s, 1.5s;
        -webkit-animation-delay: 0s, .3s;
        animation-delay: 0s, .3s;
        -webkit-animation-timing-function: ease-out, ease-in-out;
        animation-timing-function: ease-out, ease-in-out;
        -webkit-animation-iteration-count: 1, infinite;
        animation-iteration-count: 1, infinite;
        -webkit-animation-fill-mode: forwards;
        animation-fill-mode: forwards;
        -webkit-animation-direction: normal, alternate;
        animation-direction: normal, alternate;
    }
    
    @media(max-width:1250px){
        max-width: 540px;
    }

    @media(max-width:370px){
        .card{
            h2{
                font-size: 35px;
            }
        }
    }
`