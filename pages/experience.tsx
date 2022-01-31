import styled from "styled-components"
import Header from '../components/layout/header'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination } from "swiper";

export default function About(){
    return (
    <>
        <Header/>

        <Style>
            <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card1">
                        <h1>2012 - 2016</h1>
                        <p>Graduação Odontologia - UEL</p>
                        <img src="/img/odonto.jpg"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card2">
                        <h1>2017 - 2018</h1>
                        <p>Cirurgiã dentista</p>
                        <img src="/img/eiso.jpg"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card3">
                        <h1>2019 - 2023</h1>
                        <p>Graduação ADS- IFPR</p>
                        <img src="/img/ifpr.png"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card8">
                        <h1>2020</h1>
                        <p>Elite Soft</p>
                        <p>Suporte Financeiro - estágio</p>
                        <img src="/img/elite.png"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card4">
                        <h1>2020</h1>
                        <p>Founder Institute</p>
                        <p>(Bolsista)</p>
                        <img src="/img/founder.png"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card7">
                        <h1>2020- 2021</h1>
                        <p>Let's Comunicação</p>
                        <p>Front-End ReactJs/NextJs</p>
                        <img src="/img/lets.jpg"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card5">
                        <h1>2021</h1>
                        <p>Seeds for the Future</p>
                        <p>Huawei</p>
                        <img src="/img/seeds.png"/>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="card6">
                        <h1>2022</h1>
                        <p>Graduação Sanduíche</p>
                        <p>IPB - Bragança.Portugal</p>
                        <img src="/img/ipb.jpg"/>
                    </div>
                </SwiperSlide>
            </Swiper>
      
        </Style>

        {/* <AboutStyle>
            <img src="/img/img.jpeg"/>

            <div className="text">
                <h1>Olá, seja bem-vindo(a)!</h1><br/>
                <p className="p-semibold">Aqui vou falar algumas curiosidades sobre mim: <br/> </p>
                <p><strong>1.</strong> Sou formada em Odontologia pela Universidade Estadual de Londrina (UEL), trabalhei aproximadamente 2 anos na área;</p>
                <p><strong>2.</strong>  Sou apaixonada pela lingua inglesa e amo aprender idiomas novos;</p>
                <p><strong>3.</strong> Sempre tive vontade de fazer um intercâmbio, de no mínimo 6 meses, para ficar completamente imersa em um ambiente novo, completamente diferente;
                    e agora, Fevereiro de 2022 terei essa oportunidade. Irei fazer uma graduação sanduíche em Bragança- Portugal;
                </p>
                <p><strong>4.</strong> Empreendedorismo é algo que arde em meu coração. E é uma área que ainda irei explorar bastante;</p>
                <p><strong>5.</strong> Fui uma das alunas selecionada, dentre outros alunos do Brasil todo, em um programa ofertado pela Huawei em 2021 e se não fosse a pandemia, teríamos
                    a oportunidade de ir à China conhecer a sede da Huawei
                </p>
            </div>
        </AboutStyle> */}

       
    </>    
    )
}

const Style = styled.section`
    background-color: var(--primary-color);
    padding-bottom: 100px;

    .swiper {
        width: 100%;
        padding-top: 50px;
        padding-bottom: 50px;
    }

    .swiper-slide {
        background-position: center;
        background-size: cover;
        width: 300px;
        height: 300px;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
    }

    .card1, .card2, .card3, .card4, .card5, .card6, .card7, .card8{
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
       
        img{
            max-width: 206px;
        }
    }

    .card1{
        border: solid 4px #77272a;

        img{
            max-width: 190px;
            padding-bottom: 16px;
        }
    }

    .card2{
        border: solid 4px #037ac5;
    }
    
    .card3{
        border-width: 4px;
        border-style: solid;
        border-image: linear-gradient(to bottom, #2b9f3f, #ce1218) 1;
        
        img{
            padding-bottom: 31px;
        }
    }

    .card4{
        border-width: 4px;
        border-style: solid;
        border-image: linear-gradient(to bottom, #316c2f, #7bc53a) 1;
        img{
            margin-top: 43px;
            padding-bottom: 53px;
        }
    }

    .card5{
        border-width: 4px;
        border-style: solid;
        border-image: linear-gradient(to top, #ff2000, #ff8d7c) 1;
        img{
            max-width:225px;
            padding-bottom: 44px;
        }
    }

    .card6{
        border: solid 4px #810052;

        img{
            margin-top: 40px;
            max-width: 240px;
            padding-bottom: 57px;
        }
    }

    .card7{
        border: solid 4px #000;

        img{
            margin-top: 40px;
            max-width: 240px;
            padding-bottom: 57px;
        }
    }

    .card8{
        border-width: 4px;
        border-style: solid;
        border-image: linear-gradient(to bottom, darkblue, #d0333a) 1;

        img{
            margin-top: 40px;
            max-width: 240px;
            padding-bottom: 50px;
        }
    }

`


const AboutStyle = styled.section`
    background-color: var(--primary-color);
    padding: 115px 60px 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    img{
        max-width: 376px;
    }

    .text{
        max-width: 500px;
        width: 100%;
    }

`
