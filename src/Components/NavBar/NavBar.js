import styled from "styled-components";
import logoImg from "../../image/logo.svg";
import userImg from "../../image/user.svg";
import "../../index.css";

const Header = styled.section`
  height: 80px;
  background-color: #299b01;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  color: #ffffff;
  z-index: 200;
`;

const Logo = styled.a`
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    img {
      transform: scale(1.3);
    }

    h1 {
      letter-spacing: 2px;
    }
  }
`;

const LogoImg = styled.img`
  width: 50px;
  margin-right: 16px;
  transition: all 0.3s;
`;

const H1 = styled.h1`
  font-family: "DMSans", sans-serif;
  font-size: 24px;
  transition: all 0.3s;
`;

const User = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  font-family: "Roboto", sans-serif;
  color: #ffffff;

  img {
    transition: all 0.3s;
  }

  span {
    text-transform: uppercase;
    display: block;
    margin-top: 5px;
    transition: all 0.3s;
  }

  &:hover {
    img {
      transform: scale(1.3);
    }

    span {
      letter-spacing: 2px;
    }
  }
`;

export const NavBar = () => {
  return (
    <Header>
      <Logo>
        <LogoImg src={logoImg} alt="Логотип" />
        <H1>Бургерная №1</H1>
      </Logo>
      <User>
        <img src={userImg} alt="Иконка юзер" />
        <span>Войти</span>
      </User>
    </Header>
  );
};
