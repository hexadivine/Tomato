import { createContext, useContext } from "react";

const LoginCredentials = createContext(null);

const useLoginCredentials = () => {
    return useContext(LoginCredentials);
};

export { LoginCredentials, useLoginCredentials };
