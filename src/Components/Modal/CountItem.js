import React from "react";
import styled from "styled-components";

const CountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CountInput = styled.input`
  width: 50px;
  font-size: 20px;
  text-align: center;
`;

const ButtonCount = styled.button`
  width: 20px;
  font-size: 20px;
`;

export const CountItem = ({ count, setCount, onChange }) => {
  return (
    <CountWrapper>
      <span>Количество:</span>
      <div>
        <ButtonCount disabled={count <= 1} onClick={() => setCount(--count)}>
          -
        </ButtonCount>
        <CountInput
          type="number"
          min="1"
          max="100"
          onChange={onChange}
          value={count < 1 ? 1 : count}
        />
        <ButtonCount onClick={() => setCount(++count)}>+</ButtonCount>
      </div>
    </CountWrapper>
  );
};
