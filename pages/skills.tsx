import styled from 'styled-components'
import Header from '../components/layout/header'

export default function Skills(){
    return(
        <>
            <Header/>
            <Style>
                <div className="top">
                    <h1 className="title">Hard Skills</h1>

                    <ul>
                        <li>
                            <a >
                            <h2>#1</h2>
                            <p> HTML</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>#2</h2>
                            <p>CSS</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>#3</h2>
                            <p>ReactJs</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>#4</h2>
                            <p>NextJs</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>#5</h2>
                            <p>Git</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>#6</h2>
                            <p>Github</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>#7</h2>
                            <p>JavaScript</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>#8</h2>
                            <p>TypeScript</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="middle">
                    <h1 className="title">Soft Skills</h1>

                    <ul>
                        <li>
                            <a >
                            <h2>#1</h2>
                            <p> Boa Comunicação</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>#2</h2>
                            <p>Facilidade com trabalho em equipe</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>#3</h2>
                            <p>Honestidade</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>#4</h2>
                            <p>Confiança</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>#5</h2>
                            <p>Empatia</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>#6</h2>
                            <p>Analítica</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>#7</h2>
                            <p>Organizada</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>#8</h2>
                            <p>Gosto de sempre aprender coisas novas</p>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <div className="bottom">
                    <h1 className="title">Extra Skill</h1>

                    <ul>
                        <li>
                            <a >
                            <h2>Inglês</h2>
                            <p> Intermediário avançado</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>TOEIC </h2>
                            <p> 795</p>
                            </a>
                        </li>
                        <li>
                            <a >
                            <h2>TOEFL </h2>
                            <p>550 (B2)</p>
                            </a>
                        </li>
                       
                    </ul>
                </div>
            </Style>
        </>
    )
}

const Style = styled.section`
    background-color: var(--primary-color);
    padding: 115px 250px 150px;

    .top, .middle{
        margin-bottom: 100px;
    }

    ul,li{
        list-style:none;
    }

    ul{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    ul li a{
        text-decoration:none;
        color:#000;
        background-color:#FDFDC9;
        display:block;
        height:10em;
        width:10em;
        padding:1em;
        box-shadow: 5px 5px 7px rgba(33,33,33,.7);
        transform: rotate(-6deg);
        transition: transform .15s linear;
    }

    ul li{
        margin:1em;
    }

    ul li:nth-child(even) a{
        transform:rotate(4deg);
        position:relative;
        top:5px;
        background-color: #cbfdca;
    }

    ul li:nth-child(3n) a{
        transform:rotate(-3deg);
        position:relative;
        top:-5px;
        background-color: #cacafc;
    }

    ul li:nth-child(5n) a{
        transform:rotate(5deg);
        position:relative;
        top:-10px;
    }

    ul li a:hover,ul li a:focus{
        box-shadow:10px 10px 7px rgba(0,0,0,.7);
        transform: scale(1.25);
        position:relative;
        z-index:5;
    }
`