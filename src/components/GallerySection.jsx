import styled from "styled-components";
import {IMAGES} from "../index";
import {useState} from "react";

export function GallerySection() {

    const [selected, setSelected] = useState(null);
    const [showModal, setShowModal] = useState(false);


    return (
        <>
                <Modal showModal={showModal} onClick={() => setShowModal(false)}>
                    <ModalContent>
                        <ModalImage src={selected} alt="test"/>

                    </ModalContent>
                </Modal>
            <GalleryContainer>
                {IMAGES.map((image, i) => {
                    return (
                        <Section key={i}>
                            <Title>{image.title}</Title>
                            <Container>
                                {image.images.map((image, j) =>
                                    <Photo key={j} onClick={() => {setShowModal(true); setSelected(image);}} src={image} alt="test"/>)}
                            </Container>
                        </Section>
                    )

                })}
            </GalleryContainer>
        </>
    )
}


const Modal = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({showModal}) => (showModal ? '100%' : '0')};
    visibility: ${({showModal}) => (showModal ? 'visible' : 'hidden')};
    transition: all 0.3s ease-in-out;
`;


const GalleryContainer = styled.div`
    background-color: #fff;
    width: 100%;
    position: relative;
    z-index: 20;
    padding-top: 100px;
    padding-bottom: 100px;

`;

const Section = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;  
    align-items: center;
    flex-direction: column;
    padding: 0 100px;
    position: relative;
    z-index: 20;
  
    @media screen and (max-width: 768px) {
        padding: 0 20px;
    }
`;

const Title = styled.h1`
    font-size: 3rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 30px;
    padding: 30px 0;
    position: relative;
    z-index: 20;
  text-transform: uppercase;
    font-family: 'Ysabeau', serif;
`;

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  grid-gap: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
  }
`;

const Photo = styled.img
    `
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    margin: 0 auto;
    transition: all 0.3s ease-in-out;
      
    &:hover {
      background-color: rgba(0,0,0,0.5);
      cursor: pointer;
      
    }
  
`;

const ModalContent = styled.div`
    width: 80%;
    height: 80%;
    position: relative;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 30px;
    @media screen and (max-width: 768px) {
        width: 100%;
        height: 100%;
    }

`;

const ModalImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;
