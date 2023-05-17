import styled from "styled-components";
import { React } from "react";
import { ListItem } from "./ListItem";
import { useFetch } from "../Hooks/useFetch";
import bannerImg from "../../image/banner.png";

const MenuWrapper = styled.section`
  display: flex;
  flex-direction: column;
  margin: 80px 0 0 380px;
`;

const BannerImg = styled.img`
  width: 100%;
  height: auto;
`;

const MenuContent = styled.div`
  padding: 20px 30px 15px;
`;

const MenuTitle = styled.h2`
  font-family: "GothamPro";
  font-size: 30px;
  margin-bottom: 10px;
`;

export const Menu = () => {
  const res = useFetch();
  const dbMenu = res.response;
  return (
    <MenuWrapper>
      <BannerImg src={bannerImg} alt="Беннер сайта" />
      {res.response ? (
        <>
          <MenuContent>
            <MenuTitle>Бургеры</MenuTitle>
            <ListItem itemList={dbMenu.burger} />
          </MenuContent>
          <MenuContent>
            <MenuTitle>Закуски</MenuTitle>
            <ListItem itemList={dbMenu.other} />
          </MenuContent>
        </>
      ) : res.error ? (
        <div>Что то пошло не так...</div>
      ) : (
        <div>Загружаем...</div>
      )}
    </MenuWrapper>
  );
};
