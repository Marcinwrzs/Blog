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
