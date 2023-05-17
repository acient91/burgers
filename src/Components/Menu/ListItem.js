import React, { useContext } from "react";
import styled from "styled-components";
import { formatCurrency } from "../Functions/SecondaryFunctions";
import { Context } from "../Functions/context";

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
`;
const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin-bottom: 30px;
  margin-right: 30px;
  padding: 15px;
  font-size: 30px;
  font-family: "GothamPro";
  font-weight: 200;
  color: white;
  z-index: 1;
  cursor: pointer;
  transition: all 0.3s;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: black;
    opacity: 30%;
    z-index: -1;
    transition: all 0.3s;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px rgba(0, 0, 0, 1);
    &:after {
      opacity: 0;
    }
  }
`;

export const ListItem = ({ itemList }) => {
  const {
    openItem: { setOpenItem },
  } = useContext(Context);

  return (
    <List>
      {itemList.map((item) => (
        <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
          <p>{item.name}</p>
          <p>{formatCurrency(item.price)}</p>
        </Item>
      ))}
    </List>
  );
};
