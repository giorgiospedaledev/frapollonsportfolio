import React from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <Container>
            <IconLink href="mailto:fra.pollono@gmail.com" aria-label="Email">
                <FontAwesomeIcon icon={faEnvelope} />
            </IconLink>
            <Copyright>
                &copy; {year} Francesca Pollono
            </Copyright>
            <IconLink href="https://www.instagram.com/frae.im/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} />
            </IconLink>
        </Container>
    );
};

export default Footer;

const Container = styled.footer`
    width: 100%;
    background-color: #000;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 40px;
    position: relative;
    z-index: 20;
`;

const Copyright = styled.p`
    font-size: 0.85rem;
    font-weight: 400;
    color: rgba(255, 255, 255, 0.7);
    font-family: 'Montserrat', sans-serif;
    letter-spacing: 0.05rem;
`;

const IconLink = styled.a`
    font-size: 1.3rem;
    color: #fff;
    text-decoration: none;
    transition: opacity 0.3s ease, transform 0.3s ease;

    &:hover {
        opacity: 0.7;
        transform: translateY(-2px);
    }
`;
