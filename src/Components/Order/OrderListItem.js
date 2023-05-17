import React, { useContext } from "react";
import styled from "styled-components";
import trashImage from "../../image/trash.svg";
import { Context } from "../Functions/context";
import { formatCurrency } from "../Functions/SecondaryFunctions";
import { totalPriceItems } from "../Functions/SecondaryFunctions";

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  background-image: url(${trashImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const OrderItemStyled = styled.li`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0;
  cursor: pointer;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

export const OrderListItem = ({ order, index, deleteItem }) => {
  const {
    openItem: { setOpenItem },
  } = useContext(Context);

  return (
    <OrderItemStyled>
      <ItemName>{order.name}</ItemName>
      <span>{order.count}</span>
      <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
      <TrashButton />
    </OrderItemStyled>
  );
};
