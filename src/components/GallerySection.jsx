import styled from "styled-components";
import IMAGES from "../data/images";
import {useState, useEffect, useCallback, useRef} from "react";

export function GallerySection() {
    const [selected, setSelected] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const openModal = useCallback((fullSrc) => {
        setSelected(fullSrc);
        setShowModal(true);
        document.body.classList.add('modal-open');
    }, []);

    const closeModal = useCallback(() => {
        setShowModal(false);
        document.body.classList.remove('modal-open');
    }, []);

    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape' && showModal) closeModal();
        };
        window.addEventListener('keydown', handleKey);
        return () => window.removeEventListener('keydown', handleKey);
    }, [showModal, closeModal]);

    return (
        <>
            <Modal $showModal={showModal} onClick={closeModal}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                    <CloseButton onClick={closeModal} aria-label="Close">&times;</CloseButton>
                    {selected && <ModalImage src={selected} alt="Full size photo" />}
                </ModalContent>
            </Modal>
            <GalleryContainer>
                {IMAGES.map((category, i) => (
                    <GalleryCategorySection key={i} category={category} onImageClick={openModal} />
                ))}
            </GalleryContainer>
        </>
    );
}

function GalleryCategorySection({category, onImageClick}) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true); },
            {threshold: 0.05}
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <Section ref={ref} $visible={visible}>
            <Title>{category.title}</Title>
            <Container>
                {visible && category.images.map((image, j) => (
                    <Photo
                        key={j}
                        onClick={() => onImageClick(image.full)}
                        src={image.thumb}
                        alt={`${category.title} photo ${j + 1}`}
                        loading="lazy"
                    />
                ))}
            </Container>
        </Section>
    );
}

const Modal = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.85);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: ${({$showModal}) => ($showModal ? '1' : '0')};
    visibility: ${({$showModal}) => ($showModal ? 'visible' : 'hidden')};
    transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const ModalContent = styled.div`
    width: 85%;
    height: 85%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        width: 95%;
        height: 90%;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: -10px;
    right: -10px;
    background: none;
    border: none;
    color: #fff;
    font-size: 2.5rem;
    cursor: pointer;
    z-index: 101;
    line-height: 1;
    padding: 10px;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.7;
    }

    @media screen and (max-width: 768px) {
        top: 0;
        right: 5px;
        font-size: 2rem;
    }
`;

const ModalImage = styled.img`
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`;

const GalleryContainer = styled.div`
    background-color: #fff;
    width: 100%;
    position: relative;
    z-index: 20;
    padding: 80px 0;
`;

const Section = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0 80px;
    margin-bottom: 60px;
    min-height: 200px;
    opacity: ${({$visible}) => $visible ? 1 : 0};
    transform: translateY(${({$visible}) => $visible ? '0' : '30px'});
    transition: opacity 0.8s ease, transform 0.8s ease;

    @media screen and (max-width: 768px) {
        padding: 0 15px;
        margin-bottom: 40px;
    }
`;

const Title = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    color: #000;
    margin-bottom: 30px;
    padding: 20px 0;
    text-transform: uppercase;
    font-family: 'Ysabeau', serif;
    letter-spacing: 0.1rem;

    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Container = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 15px;

    @media screen and (max-width: 1024px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
    }
`;

const Photo = styled.img`
    width: 100%;
    aspect-ratio: 3/4;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease, filter 0.3s ease;

    &:hover {
        transform: scale(1.03);
        filter: brightness(0.85);
    }
`;
