import React from 'react';
import styled from 'styled-components';
import logo2 from '../../assets/image/logo2.d55d604b.svg';
import playstore from '../../assets/image/playstore.ea7e01fc.svg';
import appstore from '../../assets/image/applyimg.9c624457.svg';
import personGlass from '../../assets/image/porsonglass.20915e97.svg';
import bgPersonGlass from '../../assets/image/bgpersonglass.3d69baf9.svg';

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  margin-top: 1.25rem;

  @media (min-width: 640px) {
    max-width: 640px;
  }
  @media (min-width: 768px) {
    max-width: 768px;
  }
  @media (min-width: 1024px) {
    max-width: 1024px;
  }
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

const BgContainer = styled.div`
  background-image: url(${bgPersonGlass});
  width: 100%;
  border: 1px solid #ed3c29;
  border-radius: 20px;
  position: relative;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color:#0f2944;
  border: 1px solid #0f2944;
  border-radius: 20px;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const Content = styled.div`
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
  padding-left: 1.25rem;
  width: 100%;

  @media (min-width: 768px) {
    padding-left: 2.5rem;
  }
`;

const Logo = styled.img`
  width: 80px;
  height: 80px;
`;

const Title = styled.p`
  color: white;
  font-size: 25px;
  text-transform: uppercase;
  margin-top: 0.5rem;
  font-family: 'Airbnb Cereal App';
  font-weight: 900;

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1024px) {
    font-size: 38px;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(to bottom, #fa610a, #ed3c29);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const Description = styled.p`
  color: white;
  font-family: 'Airbnb Cereal App';
  margin-top: 0;
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 490px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
  margin-top: 1.25rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  @media (min-width: 768px) {
    flex-direction: row;
    padding-left: 0;
    padding-right: 0;
  }
`;

const StoreButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  background-color: white;
  padding: 0.25rem 1.25rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transform: skew(-12deg);

  img {
    width: 30px;
    height: 30px;
    transform: skew(12deg);
  }

  p {
    margin: 0;
    transform: skew(12deg);
  }
`;

const PersonImage = styled.img`
  width: 400px;
  height: 400px;
  z-index: 20;
  color: transparent;
`;

const BgPersonImage = styled.img`
  position: absolute;
  right: 0;
  top: 0;
  width: 400px; /* Adjust width to match PersonImage */
  height: 400px; /* Adjust height to match PersonImage */
  z-index: 10;
  color: transparent;
`;


const DownloadappSection = () => {
  return (
    <Container>
      <BgContainer>
        <FlexContainer>
          <Content>
            <Logo src={logo2} alt="Logo" />
            <Title>
              download our <GradientText>app</GradientText>
            </Title>
            <Description>
              Metaverse to provide a comprehensive experience for a human and the whole world for anyone and everyone. Explore the virtual world and start your journey with your
              <GradientText> Social-e</GradientText>
            </Description>
            <ButtonContainer>
              <StoreButton>
                <img src={playstore} alt="Google Play" />
                <div>
                  <p>GET IT ON</p>
                  <p>Google Play</p>
                </div>
              </StoreButton>
              <StoreButton>
                <img src={appstore} alt="App Store" />
                <div>
                  <p>Download onthe</p>
                  <p>App Store</p>
                </div>
              </StoreButton>
            </ButtonContainer>
          </Content>
          <PersonImage src={personGlass} alt="Person with Glass" />
        </FlexContainer>
        <BgPersonImage src={bgPersonGlass} alt="Background Person Glass" />
      </BgContainer>
    </Container>
  );
};

export default DownloadappSection;
