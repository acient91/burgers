import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import { useCount } from "../Hooks/useCount";
import { Context } from "../Functions/context";
import { formatCurrency } from "../Functions/SecondaryFunctions";
import { totalPriceItems } from "../Functions/SecondaryFunctions";
import { ButtonCheckout } from "../Style/ButtonCheckout";
import { CountItem } from "./CountItem";

const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  width: 600px;
  height: 600px;
  background-color: #ffffff;
  border-radius: 30px;
`;

const Banner = styled.img`
  width: 100%;
  height: 200px;
  background-image: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: calc(100% - 200px);
  padding: 20px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "DMSans";
  font-size: 20px;
`;
const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalItem = () => {
  const {
    openItem: { openItem, setOpenItem },
    orders: { orders, setOrders },
  } = useContext(Context);

  const counter = useCount(openItem.count);

  const CloseModal = (e) => {
    if (e.target.id === "overlay") {
      setOpenItem(null);
    }
  };

  const order = {
    ...openItem,
    count: counter.count,
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  };

  return (
    <Overlay id="overlay" onClick={CloseModal}>
      <Modal>
        <Banner img={openItem.img} />
        <Content>
          <HeaderContent>
            <div>{openItem.name}</div>
            <div>{formatCurrency(openItem.price)}</div>
          </HeaderContent>
          <CountItem {...counter} />
          <TotalPriceItem>
            <p>Цена</p>
            <p>{formatCurrency(totalPriceItems(order))}</p>
          </TotalPriceItem>
          <ButtonCheckout onClick={addToOrder}>Добавить</ButtonCheckout>
        </Content>
      </Modal>
    </Overlay>
  );
};
