import HeroBgImage from '../assets/images/hero-background.webp';
import styled, {keyframes} from "styled-components";

export function HeroSection() {
    return (
        <HeroContainer>
            <HeroBg />
            <Overlay />
            <ScrollIndicator onClick={() => {
                document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});
            }}>
                <ScrollLine />
            </ScrollIndicator>
        </HeroContainer>
    );
}

const HeroContainer = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    z-index: 1;
    overflow: hidden;
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
    z-index: 0;
`;

const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
        180deg,
        rgba(0,0,0,0.1) 0%,
        rgba(0,0,0,0.4) 100%
    );
    z-index: 1;
`;

const scrollBounce = keyframes`
    0%, 100% { transform: translateY(0); opacity: 1; }
    50% { transform: translateY(10px); opacity: 0.5; }
`;

const ScrollIndicator = styled.div`
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 2;
    cursor: pointer;
    animation: ${scrollBounce} 2s ease-in-out infinite;
`;

const ScrollLine = styled.div`
    width: 1px;
    height: 60px;
    background-color: rgba(255,255,255,0.7);
`;
