import styled from "styled-components";

export const AppWrapper = styled.div`
  height: calc(100% - 80px);

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 24px;
  }
  h2:first-child:after {
    background-color: rgb(255, 192, 23);
    height: 2px;
    width: 95%;
    content: "";
    display: block;
  }

  @media (max-width: 1080px) {
    h2 {
      font-size: 22px;
    }
  }
  @media (max-width: 900px) {
    h2 {
      font-size: 24px;
    }
  }
`;
