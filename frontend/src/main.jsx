import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CategoryContextProvider from "./contexts/Category/CategoryContextProvider.jsx";
import CartContextProvider from "./contexts/Cart/CartContextProvider.jsx";
import LoginCredentialsProvider from "./contexts/LoginCredentials/LoginCredentialsProvider.jsx";
import "react-toastify/dist/ReactToastify.css";
import FoodListProvider from "./contexts/FoodList/FoodListProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <LoginCredentialsProvider>
                <FoodListProvider>
                    <CategoryContextProvider>
                        <CartContextProvider>
                            <App />
                        </CartContextProvider>
                    </CategoryContextProvider>
                </FoodListProvider>
            </LoginCredentialsProvider>
        </BrowserRouter>
    </React.StrictMode>
);
