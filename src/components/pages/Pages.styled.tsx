import styled from "styled-components";

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

export const Aside = styled.aside`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
