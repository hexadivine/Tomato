import { createContext, useContext } from "react";

export const CategoryContext = createContext('all');

export const useCategory = () => {
    return useContext(CategoryContext);
}