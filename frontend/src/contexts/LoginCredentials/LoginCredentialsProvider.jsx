import React, { useState } from "react";
import { LoginCredentials } from "./LoginCredentials";

function LoginCredentialsProvider({ children }) {
    const storedToken = localStorage.getItem("token");
    const [token, setToken] = useState(storedToken);

    return (
        <LoginCredentials.Provider value={{ token, setToken }}>
            {children}
        </LoginCredentials.Provider>
    );
}

export default LoginCredentialsProvider;
