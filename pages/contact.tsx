import styled from 'styled-components'
import Header from '../components/layout/header'
import { GrLinkedinOption } from "react-icons/gr";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { CgMail } from "react-icons/cg";
import { VscGithub } from "react-icons/vsc";


export default function Contact(){
    return(
        <>
            {/* <Header/> */}
            <Style>
                <a href="/"><AiOutlineArrowLeft color="#fff" size={40}/></a>
                <div id="container">
                    <div id="hero-img"></div>
                    <div id="profile-img">
                        <img src="/img/self.png" alt="" />
                    </div>

                    <div id="content">
                        <h1>Amanda Furuta</h1>
                        <p>Web Developer - ReactJs/NextJs</p>
                        <div className="social">
                            <a href="https://www.linkedin.com/in/AmandaFt07/"><GrLinkedinOption color="#a4a19f" size={20}/></a>
                            <p>Amanda Furuta</p>
                        </div>
                        <div className="social">
                            <CgMail color="#a4a19f" size={20} style={{marginRight:10}}/>
                            <p>amandafuruta@gmail.com</p>
                        </div>
                        <div className="social">
                            <a href="https://github.com/AmandaFt07"><VscGithub color="#a4a19f" size={20} style={{marginRight:10}}/></a>
                            <p>AmandaFt07</p>
                        </div>
                    </div>
                </div>
            </Style>
        </>
    )
}

const Style = styled.section`
    padding: 80px;
	background: url('/img/bg.png') no-repeat center center fixed;
	-webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
	font-family: 'Raleway', sans-serif;


#container {
	width: 400px;   
	margin: 0 auto 0 auto;
	background: #FFF;
	border-radius: 10px;
	box-shadow: 0 0 30px rgba(0,0,0,.3);
	-webkit-box-shadow: 0 0 30px rgba(0,0,0,.3);
	overflow: hidden;
	
	#hero-img {
		width: 100%;
		height: 200px;
		background: url('http://emilcarlsson.se/assets/forest.jpg') no-repeat center center;
		background-size: cover;
	}
	
	#profile-img {
		width: 160px;
		height: 160px;
		margin: -80px auto 0 auto;
		border: 6px solid #FFF;
		border-radius: 50%;
		box-shadow: 0 0 5px rgba(90,90,90,.3);
        overflow: hidden;
		
		img {
            width: 240px;
            position: relative;
            right: 29px;
            top: -31px;
}
			border-radius: 50%;
		}
	}
	
	#content {
		text-align: center;
		width: 320px;
		margin: 0 auto;
		padding: 0 0 30px 0;
		
		h1 {
			font-size: 29px;
			font-weight: 500;
			margin: 20px 0 0 0;
		}
		
		p {
			font-size: 18px;
			font-weight: 400;
			line-height: 1.4;
			color: #666;
			margin: 0 0 50px 0;
		}
		
		a {
			color: #CCC;
			font-size: 14px;
			margin: 0 10px;
			transition: color .3s ease-in-out;
			-webkit-transition: color .3s ease-in-out;
			
			&:hover {
				color: $primary-color;
			}
		}

        .social{
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 20px;

            p{
                margin: 0
            }
        }
	}
}
`