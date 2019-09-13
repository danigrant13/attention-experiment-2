import styled from "styled-components";

export const Input = styled.input`
  height: 35px;
  border-radius: 0;
  margin-right: 15px;
`;

export const Button = styled.button`
  background-color: #009CBB;
  border: none;
  padding: 9px 28px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;

  &:hover, &:focus {
    background-color: #008CBA;
  }

  &:disabled {
    background-color: #6699CC;
  }
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
