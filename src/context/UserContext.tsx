import { useCallback, useMemo, useState } from "react";
import { useContext } from "react";
import {
  TokenContext,
  TokenContextControllerProps,
  userIdentifier,
  TokenPayload,
} from "./TokenContext";

export const useTokenContext = () => {
  const ctx = useContext(TokenContext);

  if (!ctx)
    throw new Error(
      "useTokenContext can only be used inside TokenContextController"
    );

  return ctx;
};

export const TokenContextController = ({
  children,
}: TokenContextControllerProps) => {
  const [accessToken, setAccessToken] = useState<string | null>(
    localStorage.getItem(userIdentifier)
  );

  const onTokenSave = useCallback(
    ({ newToken, storeTokenInStorage }: TokenPayload) => {
      setAccessToken(newToken);

      if (storeTokenInStorage) {
        localStorage.setItem(userIdentifier, newToken);
      }
    },
    []
  );

  const contextValue = useMemo(
    () => ({ accessToken, onTokenSave }),
    [accessToken, onTokenSave]
  );

  return (
    <TokenContext.Provider value={contextValue}>
      {children}
    </TokenContext.Provider>
  );
};
export { userIdentifier };
