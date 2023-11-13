import styled from "styled-components";

export const Aside = styled.aside`
  width: 40%;
  border-left: 2px solid rgb(255, 192, 23);
  padding-left: 30px;

  @media (max-width: 900px) {
    width: 100%;
    padding-left: 0px;
    border-left: none;
  }
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 0 20px;
  max-width: 1400px;
  display: flex;

  @media (max-width: 900px) {
    flex-direction: column;
  }

  @media (max-width: 450px) {
    width: 90%;
  }
`;
