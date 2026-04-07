import styled from "styled-components";
import PortraitImage from "../assets/images/portrait.webp";
import {useEffect, useRef, useState} from "react";

export default function AboutMeSection() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            {threshold: 0.2}
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Container id="about" ref={ref} $visible={visible}>
            <Title>About me</Title>
            <ContentContainer>
                <Portrait
                    src={PortraitImage}
                    alt="Portrait of Francesca Pollono"
                    loading="lazy"
                />
                <Paragraph>
                    <span>Francesca Pollono</span>, 21 years old,
                    is a professional photographer with a great passion for the art of photography.
                    Her specialization mainly focuses on fashion, portraits, backstage's, and events.
                    In addition to her passion for photography, Francesca is always looking for new
                    opportunities to grow professionally and improve her skills. With a positive attitude and great determination,
                    she is ready to face any challenge and overcome any obstacles that may come her way.
                    She studied at the European Institute of Design (IED) in Milan specializing in Fashion
                    Photography and worked in communication and wedding agencies.
                </Paragraph>
            </ContentContainer>
        </Container>
    );
}

const Container = styled.section`
    background-color: #fff;
    width: 100%;
    padding: 0 40px;
    padding-top: 90px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 20;
    opacity: ${({$visible}) => $visible ? 1 : 0};
    transform: translateY(${({$visible}) => $visible ? '0' : '30px'});
    transition: opacity 0.8s ease, transform 0.8s ease;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    font-style: italic;
    color: #000;
    text-transform: uppercase;
    font-family: 'Ysabeau', serif;
    padding-top: 8vh;
    margin-bottom: 2vh;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        padding-top: 5vh;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1200px;
    width: 100%;
    gap: 40px;
    margin: 3vh 0;

    @media screen and (max-width: 768px) {
        flex-direction: column;
        gap: 20px;
    }
`;

const Portrait = styled.img`
    flex: 1;
    max-width: 350px;
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);

    @media screen and (max-width: 768px) {
        max-width: 100%;
        box-shadow: none;
    }
`;

const Paragraph = styled.div`
    flex: 2;
    padding: 0 30px;
    text-align: justify;
    font-size: 1.15rem;
    line-height: 1.8;
    font-weight: 400;
    color: #333;
    border-right: 2px solid #000;
    font-family: 'Montserrat', sans-serif;

    span {
        font-size: 1.2rem;
        font-weight: 700;
        font-style: italic;
        color: #000;
        text-transform: uppercase;
    }

    @media screen and (max-width: 768px) {
        padding: 0;
        font-size: 1rem;
        line-height: 1.7;
        border-right: none;

        span {
            font-size: 1rem;
        }
    }
`;
