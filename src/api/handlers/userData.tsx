import { userIdentifier } from "context/UserContext";
import { UserData } from "./types";

export const storeUser = (data: UserData) => {
  localStorage.setItem(
    userIdentifier,
    JSON.stringify({
      username: data.user.username,
      jwt: data.jwt,
    })
  );
};

export const userData = () => {
  const storedUser = window.localStorage.getItem(userIdentifier);

  return storedUser ? JSON.parse(storedUser) : {};
};
