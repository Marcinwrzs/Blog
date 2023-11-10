import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(255, 192, 23);
  width: 100%;
  height: 70px;
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
