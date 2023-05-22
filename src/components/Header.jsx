import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram} from "@fortawesome/free-brands-svg-icons";
import React from "react";

export const Header = () => {
    return (
        <>
            <Container>
                <Logo>Francesca Pollono<br/><span>Fashion Photographer</span></Logo>
                <Icons>
                    <Ref href="https://www.instagram.com/frae.im/" icon={faInstagram}/>

                    {/*TODO Change mail <Ref href="mailto:fra.pollono@gmail.com" icon={}/>*/}
                    {/*<Ref href="https://www.youtube.com" icon={faYoutube}/>*/}
                    {/*<Ref href="https://www.twitter.com" icon={faTwitter}/>*/}
                </Icons>
            </Container>
        </>
    )
}


const Container = styled.div`
  position: relative;
    background-color: #fff;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 30px;
    height: 90px;
    z-index: 20;
  
`;

const Logo = styled.div`
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    color: #000;
    cursor: pointer;
    text-transform: uppercase;
    font-family: 'Ysabeau', serif;
    text-align: left;
    line-height: 0.7;
  
    span {  
      
        font-size: 1rem;
        font-weight: 700;
        color: #000;
        cursor: pointer;
        text-transform: uppercase;
        font-family: 'Ysabeau', serif;
        text-align: left;
    }
  
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        line-height: 1;
        font-weight: bold;

        span {
            font-size: 0.5rem;
        }
    }
  
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
  
    @media screen and (max-width: 768px) {
        display: none;
        
    }
`;

const Ref = (props) => {
    return (
    <a target="_blank" href={props.href} style={{ margin: '0 1rem',
        transition: 'transform 250ms',
        display: 'inline-block'}}>
        <Icon icon={props.icon} size="2x" style={{color: '#000'}} />
    </a>
    );
}

const Icon = styled(FontAwesomeIcon)`
    transition: transform 250ms;
    display: inline-block;
    
    &:hover {
        transform: translateY(-2px);
    }
`;


