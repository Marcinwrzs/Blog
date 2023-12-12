import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(255, 192, 23);
  width: 100%;
  height: 70px;
  position: sticky;
  top: 0;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 80%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 450px) {
    width: 90%;
  }
`;

export const Logo = styled(NavLink)`
  color: black;

  img {
    height: 45px;
    width: 50px;
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  div {
    margin: 0 8px;
    cursor: pointer;
  }
`;

export const Category = styled.div`
  @media (max-width: 750px) {
    display: none;
  }
`;

export const Link = styled(NavLink)`
  margin: 0 8px;
  cursor: pointer;
  color: black;
`;

export const SignUp = styled(NavLink)`
  background-color: black;
  color: white;
  padding: 8px 8px;
  width: 100px;
  text-align: center;
  border-radius: 5px;
`;
