import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CategoryContextProvider from "./contexts/Category/CategoryContextProvider.jsx";
import CartContextProvider from "./contexts/Cart/CartContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <CategoryContextProvider>
                <CartContextProvider>
                    <App />
                </CartContextProvider>
            </CategoryContextProvider>
        </BrowserRouter>
    </React.StrictMode>
);
