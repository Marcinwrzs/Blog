import { userIdentifier } from "context/UserContext";

export const storeUser = (data: any) => {
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
