import React, { useEffect, useState } from "react";
import { FoodList } from "./FoodList";

function FoodListProvider({ children }) {
    const [foodList, setFoodList] = useState([]);
    const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_ENDPOINT;

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const resp = await fetch(BACKEND_ENDPOINT + "/api/food/list");
                const respData = await resp.json();
                if (respData.success == true) setFoodList(respData.data);
                else throw "Error occurred while fetching";
            } catch (error) {
                console.log(error.message);
            }
        };

        fetchFoods();
    }, []);

    useEffect(() => {
        console.log("🚀 ~ FoodListProvider ~ foodList:", foodList);
    }, [foodList]);

    return <FoodList.Provider value={{ foodList, setFoodList }}>{children}</FoodList.Provider>;
}

export default FoodListProvider;
