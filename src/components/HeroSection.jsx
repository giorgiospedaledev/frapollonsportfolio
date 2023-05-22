import HeroBgImage from '../assets/images/hero-background.jpg';
import styled from "styled-components";

export function HeroSection() {
    return (
        <>
            <HeroContainer>
                <HeroBg />
            </HeroContainer>
        </>
    )
}


//create an hero section
//create a hero container
//create a hero wrapper in the center containing the main text of my page
//create a hero h1 with the main title of my page
//create a hero p with the main description of my page
//create a hero button with the main action of my page
const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
      // height: 800px;
    position: relative;
    z-index: 1;
    // add :before styles
`;

const HeroBg = styled.div`
    background-image: url(${HeroBgImage});
    background-size: cover;
    background-position: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100vh;
    overflow: hidden;
    z-index: 0;
  scroll-behavior: smooth;
  
    // add :before styles
    :before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        background: linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%,
            rgba(0,0,0,0.6) 100%
        ),
        linear-gradient(
            180deg,
            rgba(0,0,0,0.2) 0%,
            transparent 100%
        );
        z-index: 2;
      
    }
`;


