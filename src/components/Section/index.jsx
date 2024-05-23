import React from 'react';
import styled from 'styled-components';
import Logowithborder from '../../assets/image/logowithborder.00a4ea8a.svg';
import Wallet from '../../assets/image/walletimg.14cfe6c6.svg';
import Google from '../../assets/image/google.2ca5b399.svg';
import Apple from '../../assets/image/appleimg.27a0ff59.svg';
import Email from '../../assets/image/messegeimg.91464a50.svg';
import ContinueBgOutBorder from '../../assets/image/continuebgoutborder.833f605c.svg';
import { ButtonGroup } from '../Header';
import StyledButton from '../Button';

const SectionContainer = styled.div`
  padding: 0 20px;
  margin-top: 5rem;

  @media (min-width: 1024px) {
    padding: 0 4rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 0;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

const Title = styled.p`
  color: white;
  font-size: 24px;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Airbnb Cereal App';

  @media (min-width: 1024px) {
    font-size: 30px;
  }
`;

const GradientText = styled.span`
  font-size: 30px;
  font-family: 'Airbnb Cereal App';
  background: linear-gradient(to bottom, #fa610a, #ed3c29);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (min-width: 1024px) {
    font-size: 45px;
  }
`;

const Subtitle = styled.p`
  color: white;
  font-family: 'Airbnb Cereal App';
  margin-top: 1.25rem;
  width: 320px;
`;

const LogoImage = styled.img`
  margin-top: 1.25rem;
  width: 70%;
`;





const CardContainer = styled.div`
  position: relative;
  overflow: hidden;
  border-width: 1px;
  border-radius: 15px;
  border-color: #ed3c29;
  background-image: url(${ContinueBgOutBorder});
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 1024px) {
    width: 40%;
  }
`;

const CardTitle = styled.p`
  color: white;
  font-size: 20px;
  padding: 20px 0;
  font-family: 'Airbnb Cereal App';
`;

const CardButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0f2944;
  padding: 15px;
  width: 100%;
  border-radius: 14px;
  border: 1px solid #ed3c29;
  margin-top: 20px;
  cursor: pointer;
  transition: all 0.7s;

  &:hover {
    background: linear-gradient(to bottom, #fa610a, #ed3c29);
  }

  img {
    margin-right: 10px;
  }

  button {
    background: none;
    border: none;
    color: white;
    font-family: 'Airbnb Cereal App';
    font-size: 20px;
  }
`;

const Section = () => {
    const buttonGroup = [{ id: 1, name: 'LAUNCH APP' }, { id: 2, name: 'LOGIN IN' }];



  return (
    <SectionContainer>
      <FlexContainer>
        <TextContainer>
          <Title>
            Now Get The Real <br />
            <GradientText>Dating Experience</GradientText>
          </Title>
          <Subtitle>
            Take your friendships to a whole new level! Chat with your friends
            in interactive virtual rooms and meet new people from all over the
            world.
          </Subtitle>
          <LogoImage src={Logowithborder} alt="Logo with Border" />
          <ButtonGroup>
          {buttonGroup.map((button) => (
            <StyledButton key={button.id}>{button.name}</StyledButton>
          ))}
        </ButtonGroup>
         
        </TextContainer>
        <CardContainer>
          <CardTitle>Continue with</CardTitle>
          <CardButton>
            <img src={Wallet} alt="Wallet" width={30} height={30} />
            <button>Wallet</button>
          </CardButton>
          <CardButton>
            <img src={Google} alt="Google" width={30} height={30} />
            <button>Google</button>
          </CardButton>
          <CardButton>
            <img src={Apple} alt="Apple" width={25} height={25} />
            <button>Email</button>
          </CardButton>
          <CardButton>
            <img src={Email} alt="Email" width={30} height={30} />
            <button>Email</button>
          </CardButton>
        </CardContainer>
      </FlexContainer>
    </SectionContainer>
  );
};

export default Section;
