import { createContext } from "react";
import { ReactNode } from 'react';

export type TokenPayload = {
    newToken: string;
    storeTokenInStorage: boolean;
};

export type TokenContextValue = {
    accessToken?: string | null;
    onTokenSave: (args: TokenPayload) => void;
};

export type TokenContextControllerProps = {
    children: ReactNode;
};

export const userIdentifier = "user";

export const TokenContext = createContext<TokenContextValue | undefined>(
    undefined
);