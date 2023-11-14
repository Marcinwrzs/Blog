import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  color: black;

  @media (max-width: 350px) {
    display: none;
  }
`;
