import { createContext, useContext } from "react";

const FoodList = createContext(null);

const useFoodList = () => {
    return useContext(FoodList);
};

export { FoodList, useFoodList };
