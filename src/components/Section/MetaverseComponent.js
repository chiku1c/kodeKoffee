import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin-top: 10px;
  padding-left: 5px;
  padding-right: 5px;
  @media (min-width: 1024px) {
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 30px;
    margin-bottom:30px;
  }
`;

const MainText = styled.p`
  font-family: 'Airbnb Cereal', sans-serif;
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  line-height: 1.2;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`;

const Highlight = styled.span`
  background: linear-gradient(to bottom, #FA610A, #ED3C29);
  font-size: 25px;
  display: inline-block;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const SubText = styled.p`
  margin-top: 2px;
  color: white;
  font-family: 'Airbnb Cereal', sans-serif;
`;

const MetaverseComponent = () => {
  return (
    <Container>
      <MainText>
        Come &amp; explore a <br />
        Human center{' '}
        <Highlight>metaverse</Highlight>
      </MainText>
      <SubText>
        Our Aim to bring people together through a virtual reality. <br />
        Our intricate, rich worlds are social by design and built to last for decades.
      </SubText>
    </Container>
  );
};

export default MetaverseComponent;
