import styled from "styled-components";

export const Wrapper = styled.div`
  width: 60%;
  height: 100%;
  @media (max-width: 900px) {
    width: 100%;
  }

  h1:first-child:after {
    background-color: black;
    height: 2px;
    width: 95%;
    content: "";
    display: block;
  }
`;

export const LoadingAnimation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: 50px 0;
`;
