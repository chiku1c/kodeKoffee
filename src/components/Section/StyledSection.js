import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  max-width: 1280px;
  margin: 5rem auto;
  padding: 0 1.25rem;

  @media (min-width: 1024px) {
    padding: 0 2.5rem;
  }
`;

const TitleContainer = styled.div`
  text-align: center;
`;

const Title = styled.p`
  color: white;
  font-size: 40px;
  font-family: 'Airbnb Cereal App';
  font-weight: 700;
  line-height: 1.2;
  text-transform: uppercase;

  @media (min-width: 1024px) {
    font-size: 60px;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(to bottom, #fa610a, #ed3c29);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  display: inline-block;
`;

const Subtitle = styled.p`
  color: white;
  margin-top: 1.25rem;
  font-family: 'Airbnb Cereal App';
  text-align: center;
  padding: 0 0.5rem;

  @media (min-width: 768px) {
    padding: 0 12rem;
  }
`;

const StyledSection = () => {
  return (
    <SectionContainer>
      <TitleContainer>
        <Title>
          Enter into a massive <br />
          <GradientText>social</GradientText> experience.
        </Title>
        <Subtitle>
          <GradientText>Social-e</GradientText> is a Decentralized Dating App, as a part of Social-e Dating Network. With great technological advantage and an AI driven system, Social-e aims to be the Top Dating App and Network in the World.
        </Subtitle>
      </TitleContainer>
    </SectionContainer>
  );
};

export default StyledSection;
