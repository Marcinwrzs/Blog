import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 80px;

  h1 {
    margin-bottom: 10px;
  }
`;

export const Input = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5px 0;
  width: 220px;
  font-size: 15px;

  p {
    padding-top: 10px;
    color: red;
  }
`;

export const TextInput = styled.input`
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  margin-top: 10px;
  font-size: 16px;
`;

export const Button = styled.button`
  margin: 25px auto;
  width: 100%;
  height: 40px;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  border: none;
  color: white;
  background: none;
  background-color: rgba(17, 128, 13, 0.8);
  border-radius: 5px;

  &:hover {
    background-color: rgba(17, 128, 13, 0.9);
  }
`;

export const Link = styled(NavLink)`
  color: #1a8917;
  font-weight: 600;
  padding-left: 5px;
`;
