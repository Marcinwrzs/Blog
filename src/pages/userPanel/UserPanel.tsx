import React from "react";
import { userData } from "../../api/handlers/userData";
import * as Styled from "./UserPanel.styled";

const UserPanel: React.FC = () => {
  const { username } = userData();

  return (
    <Styled.Wrapper>
      <h4>Welcome back {username}</h4>
    </Styled.Wrapper>
  );
};

export default UserPanel;
