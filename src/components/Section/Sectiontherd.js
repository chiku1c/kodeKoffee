import styled from 'styled-components';
import GroupPersion from "../../assets/image/groupwithmessage.771124ef.svg"

const StyledContainer = styled.div`
  position: relative;
`;

const ContentContainer = styled.div`
  margin-top: 5rem;
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  @media (min-width: 1024px) {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const TextContainer = styled.div`
  width: 100%;
`;

const Title = styled.p`
  color: white;
  font-size: 30px;
  line-height: 1.2;
  text-transform: uppercase;

  @media (min-width: 768px) {
    font-size: 20px;
  }

  background: linear-gradient(to right, #fa610a, #ed3c29);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Description = styled.p`
  color: white;
  font-size: 18px;
  line-height: 1.5;
  margin-top: 5px;
  max-width: 450px;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const BackgroundImage = styled.img`
width:570;
height:384;
  position: absolute;
  top: -900px;
  right: 0;
  z-index: -1;
`;

const MainImage = styled.img`
  width: 100%;
  height: auto;
`;

const Sectiontherd = () => {
    return (
        <StyledContainer>
            <ContentContainer>
                <FlexContainer>
                    <TextContainer>
                        <Title>
                            Hang out with <span>friends & Love ones</span>
                        </Title>
                        <Description>
                            With over 400 million Active Users, Social-e is presenting the leading
                            mobile-first metaverse. Every day, Users create rooms, style avatars,
                            host experiences, and much more. we’re excited to bring true digital
                            ownership to the next 400 million people.
                        </Description>
                    </TextContainer>
                    <ImageContainer>
                        <MainImage
                            alt=""
                            loading="lazy"
                            src={GroupPersion}
                        />
                    </ImageContainer>
                </FlexContainer>
            </ContentContainer>
            {/* <BackgroundImage
                alt=""
                loading="lazy"
                src={GroupPersion}
            /> */}
        </StyledContainer>
    );
};

export default Sectiontherd;
