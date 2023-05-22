import React from 'react'

import styled from 'styled-components'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
    return (
        <Container>
            <Email href="mailto:fra.pollono@gmail.com" target="_blank" >
                <FontAwesomeIcon icon={faEnvelope} bounce />
            </Email>    
            <Copyrigth>
                © 2021 Francesca Pollono
            </Copyrigth>
            <Instagram href="https://www.instagram.com/frae.im/" target="_blank" rel="noreferral">
                <FontAwesomeIcon icon={faInstagram} bounce />
            </Instagram>
        </Container>
    )
}

export default Footer;

const Container = styled.div`
    width: 100%;
    height: auto;
    background-color: #fff;
    color: #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    position: relative;
    z-index: 20;
`;


const Copyrigth = styled.p`
    font-size: 1rem;
    font-weight: 700;
    color: #000;
    padding: 0 0 0 -30px;
    position: relative;
    z-index: 20;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: red;
    }
`;

const Instagram = styled.a`
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
    text-decoration: none;
    padding: 20px 0;
    position: relative;
    z-index: 20;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: red;
    }
`;

const Email = styled.a`
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
    text-decoration: none;
    padding: 20px 0;
    position: relative;
    z-index: 20;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: red;
    }
`;



