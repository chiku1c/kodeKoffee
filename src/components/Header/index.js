import React from 'react';
import styled from 'styled-components';
import LogoImage from '../../assets/image/logo1.e9b37091.svg';
import StyledButton from '../Button';

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: 7px auto 0;
  padding: 0 20px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 64px;
  height: 79px;
  color: transparent;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Header = () => {
  const buttonGroup = [{ id: 1, name: 'LAUNCH APP' }, { id: 2, name: 'LOGIN IN' }];

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo src={LogoImage} alt="Logo" />
        <ButtonGroup>
          {buttonGroup.map((button) => (
            <StyledButton key={button.id}>{button.name}</StyledButton>
          ))}
        </ButtonGroup>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
