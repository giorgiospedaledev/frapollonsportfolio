import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import React, {useState, useEffect} from "react";

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <Container $scrolled={scrolled}>
            <Logo>Francesca Pollono<br/><span>Fashion Photographer</span></Logo>
            <Icons>
                <Ref href="https://www.instagram.com/frae.im/" icon={faInstagram} label="Instagram" />
                <Ref href="mailto:fra.pollono@gmail.com" icon={faEnvelope} label="Email" />
            </Icons>
        </Container>
    );
};

const Container = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: ${({$scrolled}) => $scrolled ? 'rgba(255,255,255,0.97)' : '#fff'};
    backdrop-filter: ${({$scrolled}) => $scrolled ? 'blur(10px)' : 'none'};
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    height: ${({$scrolled}) => $scrolled ? '70px' : '90px'};
    z-index: 50;
    transition: all 0.3s ease;
    box-shadow: ${({$scrolled}) => $scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none'};
`;

const Logo = styled.div`
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 0.15rem;
    color: #000;
    cursor: pointer;
    text-transform: uppercase;
    font-family: 'Ysabeau', serif;
    text-align: left;
    line-height: 0.8;

    span {
        font-size: 0.75rem;
        font-weight: 400;
        letter-spacing: 0.25rem;
        color: #555;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
    }

    @media screen and (max-width: 768px) {
        font-size: 1.3rem;
        line-height: 1;

        span {
            font-size: 0.5rem;
            letter-spacing: 0.15rem;
        }
    }
`;

const Icons = styled.nav`
    display: flex;
    align-items: center;
    gap: 1.2rem;
`;

const Ref = ({href, icon, label}) => (
    <IconLink href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
        <Icon icon={icon} />
    </IconLink>
);

const IconLink = styled.a`
    color: #000;
    font-size: 1.2rem;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;

    &:hover {
        color: #555;
        transform: translateY(-2px);
    }
`;

const Icon = styled(FontAwesomeIcon)`
    transition: transform 0.3s ease;
`;
