import styled from "styled-components";

export const ButtonCheckout = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 65px;
  font-size: inherit;
  font-weight: inherit;
  background-color: #299b01;
  color: #fff;
  transition: all 0.3s;
  &:hover {
    background-color: #fff;
    color: #299b01;
    border-color: #299b01;
  }
  &:disabled {
    background-color: #ccc;
    color: #bbb;
    border-color: #aaa;
  }
`;
