import styled from "styled-components";
import PortraitImage from "../assets/images/portrait.jpg";

export default function AboutMeSection() {
    return (
        <Container>
            <Title>About me</Title>
            <ContentContainer>
                <Portrait></Portrait>
                <Paragraph><span>Francesca Pollono</span>, 21 years old,
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

const Container = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 0 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 20;
`;

const Title = styled.div`
    text-align: center;
    font-size: 2.5rem;
    font-weight: 700;
    font-style: italic;
    color: #000;
    cursor: pointer;
    text-transform: uppercase;
    font-family: 'Ysabeau', serif;
    line-height: 0.7;
    padding-top: 10vh;
        
    
    @media screen and (max-width: 768px) {
        font-size: 1.5rem;
        line-height: 1;
        font-weight: bold;
        padding-top: 5vh;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 30px;
    margin: 3vh 0;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;


const Portrait = styled.div`
    flex: 1;
    background-image: url(${PortraitImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
    
    aspect-ratio: 3/4;
    object-fit: cover;
    padding: 0;
  
    @media screen and (max-width: 768px) {
        width: 100%;
      box-shadow: none;
    }

`;

const Paragraph = styled.div`
  flex: 2;
  margin-left: 30px;
  padding: 0 50px;
  text-align: justify;
  font-size: 1.4rem;
  font-weight: 400;
  color: #000;
  border-right: 3px solid #000;
  font-family: 'Montserrat', sans-serif;


  span {
    font-size: 1.5rem;
    font-weight: 700;
    font-style: italic;
    color: #000;
    text-transform: uppercase;
    font-family: 'Montserrat', sans-serif;
  }


  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 30px 0 0;
    padding: 0;
    font-size: 1rem;
    border-right: none;

    span {
      font-size: 1rem;
    }
  }
`;




