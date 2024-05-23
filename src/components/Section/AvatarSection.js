import React from 'react';
import styled from 'styled-components';
import avatarbgs from '../../assets/image/avatarbgs.aa8542a9.svg';
import aavtarpersons from '../../assets/image/aavtarpersons.96a671e4.svg';
import avtarsbgline from '../../assets/image/avtarsbgline.35f3d1ad.svg';

const RelativeContainer = styled.div`
  position: relative;
`;

const Container = styled.div`
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  margin-top: 5rem;
  
  @media (min-width: 640px) {
    max-width: 640px;
  }
  
  @media (min-width: 768px) {
    max-width: 768px;
  }
  
  @media (min-width: 1024px) {
    max-width: 1024px;
    padding-left: 6rem;
    padding-right: 6rem;
  }
  
  @media (min-width: 1280px) {
    max-width: 1280px;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  z-index: 20;
  width: 100%;
`;

const BgImage = styled.img`
  background-color: transparent;
  opacity: 0.75;
  z-index: 20;
  color: transparent;
  width: 400px;
  height: 400px;
`;

const AvatarImage = styled.img`
left:0;
  position: absolute;
  top: 0;
  z-index: 20;
  color: transparent;
  width: 400px;
  height: 400px;
`;

const TextContainer = styled.div`
  width: 100%;
`;

const Title = styled.p`
  font-family: 'Airbnb Cereal App';
  font-weight: 900;
  text-transform: uppercase;
  color: white;
  text-align: center;
  line-height: 1.2;
  font-size: 20px;

  @media (min-width: 768px) {
    font-size: 30px;
  }

  @media (min-width: 1024px) {
    font-size: 35px;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(to bottom, #fa610a, #ed3c29);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

const Description = styled.p`
  text-align: center;
  color: white;
  margin-top: 0.75rem;
`;

const BgLineImage = styled.img`
  position: absolute;
  top: -20rem;
  opacity: 0.65;
  z-index: -20;
  color: transparent;
  width: 500px;
  height: 1000px;
`;

const AvatarSection = () => {
    return (
        <RelativeContainer>
            <Container>
                <FlexContainer>
                    <ImageContainer>
                        <BgImage
                            alt=""
                            loading="lazy"
                            decoding="async"
                            src={avatarbgs}
                        />
                        <AvatarImage
                            alt=""
                            loading="lazy"
                            decoding="async"
                            src={aavtarpersons}
                        />
                    </ImageContainer>
                    <TextContainer>
                        <Title>
                            Design your own <br />
                            <GradientText>avatar</GradientText>
                        </Title>
                        <Description>
                            Create a virtual avatar to suit your style. <br />
                            Your creativity is in your Hand, create whatever you want. <br />
                            Social-e made it simple for you!
                        </Description>
                    </TextContainer>
                </FlexContainer>
            </Container>
            <BgLineImage
                alt=""
                loading="lazy"
                decoding="async"
                src={avtarsbgline}
            />
        </RelativeContainer>
    );
};

export default AvatarSection;
