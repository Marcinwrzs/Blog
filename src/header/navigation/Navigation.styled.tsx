import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavigationWrapper = styled.div`
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
