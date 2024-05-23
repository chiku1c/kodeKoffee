import styled from "styled-components";

const Container = styled.div`
  width: 100%;

  @media (min-width: 640px) {
    max-width: 640px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }
`;

const UppercaseContainer = styled(Container)`
  text-transform: uppercase;
  margin-top: 5rem;
  margin-left: auto;
  margin-right: auto;
`;

const Paragraph = styled.p`
  font-size: 30px;
  text-align: center;
  color: rgba(255, 255, 255, 1);
  font-family: "Airbnb Cereal App";
  font-weight: 900;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const GradientText = styled.span`
  display: inline-block;
  background-image: linear-gradient(to bottom, #fa610a, #ed3c29);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

const StyledDiv = styled.div`
  ${UppercaseContainer} {
    margin-top: 20px;
  }
`;

const Textsection = () => {
  return (
    <StyledDiv>
      <UppercaseContainer>
        <Paragraph>
          Ready to start <br />
          <GradientText>Dating?</GradientText>
        </Paragraph>
      </UppercaseContainer>
    </StyledDiv>
  );
};

export default Textsection;
