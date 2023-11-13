import styled from "styled-components";

export const Article = styled.div`
  border-bottom: 1px solid black;
  margin: 20px 10px;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;

  p {
    font-size: 12px;
    font-weight: bold;
  }
  span {
    color: #76052e;
  }
`;

export const Button = styled.button`
  color: white;
  background-color: black;
  padding: 3px;
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 5px;
  width: 100px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;
