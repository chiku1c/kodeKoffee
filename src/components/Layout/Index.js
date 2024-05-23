import React from 'react';
import styled from 'styled-components';
import BG from "../../assets/image/bg2.cba586a7.svg";
import Sun from "../../assets/image/imgsun.svg";

const LayoutContainer = styled.div`
  position: relative;
  min-height: 100vh;
`;

const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: auto;
  z-index: -1;
`;

const SunImage = styled.img`
  position: absolute;
  left: 50%;
  top: 15%;
  transform: translate(-50%, -50%);
  width: 127px;
  height: 127px;
  z-index: 1;
`;

const ContentContainer = styled.div`
  position: relative;
  z-index: 2;
  padding: 20px;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <BackgroundImage src={BG} alt="Background" />
      <SunImage src={Sun} alt="Sun" />
      <ContentContainer>
        {children}
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;
