import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLoginCredentials } from "../../contexts/LoginCredentials/LoginCredentials";

import "./LoginSignup.css";

function LoginSignup({ setShowLoginSignup }) {
    const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_ENDPOINT;

    const [loginForm, setLoginForm] = useState(false);
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        agreed: false,
    });
    const { token, setToken } = useLoginCredentials();

    const submitForm = async (e) => {
        e.preventDefault();

        const URL = loginForm
            ? BACKEND_ENDPOINT + "/api/users/login"
            : BACKEND_ENDPOINT + "/api/users/signup";
        const resp = await fetch(URL, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const respData = await resp.json();

        if (!respData.success) {
            return toast.error(respData.msg);
        }

        setToken(respData.token);
        localStorage.setItem("token", respData.token);
        setShowLoginSignup(false);
    };

    return (
        <>
            <div className="login-signup-container">
                <div className="login-signup">
                    <div className="title">
                        <h2>{loginForm ? "Log In" : "Sign Up"} </h2>
                        <span onClick={() => setShowLoginSignup(false)}>X</span>
                    </div>
                    <form className="login-signup-form" onSubmit={(e) => submitForm(e)}>
                        {loginForm ? null : (
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                required
                                value={data["name"]}
                                onChange={(e) =>
                                    setData((prev) => ({ ...prev, name: e.target.value }))
                                }
                            />
                        )}
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                            value={data["email"]}
                            onChange={(e) =>
                                setData((prev) => ({ ...prev, email: e.target.value }))
                            }
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Your password"
                            required
                            value={data["password"]}
                            onChange={(e) =>
                                setData((prev) => ({ ...prev, password: e.target.value }))
                            }
                        />
                        <div className="agreement">
                            <input
                                type="checkbox"
                                required
                                value={data["agreed"]}
                                onChange={() =>
                                    setData((prev) => ({ ...prev, agreed: !data["agreed"] }))
                                }
                            />
                            <span>By continuing, I agree to the terms of use & privacy policy</span>
                        </div>
                        <input type="submit" value={loginForm ? "Login" : "Create account"} />
                        <p className="login-signup-redirect">
                            {loginForm ? "Create a new account?" : "Already have an account?"}
                            <span onClick={() => setLoginForm((prev) => !prev)}>Click here</span>
                        </p>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default LoginSignup;
