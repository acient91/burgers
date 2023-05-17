import React, { useContext } from "react";
import styled from "styled-components";
import { OrderListItem } from "./OrderListItem";
import { Context } from "../Functions/context";
import { ButtonCheckout } from "../Style/ButtonCheckout";
import { totalPriceItems } from "../Functions/SecondaryFunctions";
import { formatCurrency } from "../Functions/SecondaryFunctions";
import "../../index.css";

const OrderWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background: #fff;
  width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  font-family: "GothamPro";
  text-align: center;
  font-size: 39px;
  text-transform: uppercase;
  margin-bottom: 60px;
`;

const OrderContent = styled.ul`
  margin: 0;
  flex-grow: 1;
`;

const OrderItem = styled.li`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  font-weight: 400;

  &:not(:last-child) {
    margin-bottom: 26px;
  }
`;

const EmptyList = styled.p`
  text-align: center;
`;

export const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

export const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

export const Order = () => {
  const {
    orders: { orders, setOrders },
  } = useContext(Context);

  const total = orders.reduce(
    (result, order) => totalPriceItems(order) + result,
    0
  );

  const totalCount = orders.reduce((result, order) => order.count + result, 0);

  return (
    <OrderWrapper>
      <OrderTitle>Ваш заказ</OrderTitle>
      <OrderContent>
        {orders.length ? (
          orders.map((order, index) => (
            <OrderListItem order={order} key={index} />
          ))
        ) : (
          <EmptyList>Список заказов пуст</EmptyList>
        )}
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>{totalCount}</span>
        <TotalPrice>{formatCurrency(total)}</TotalPrice>
      </Total>
      <ButtonCheckout>Оформить</ButtonCheckout>
    </OrderWrapper>
  );
};
