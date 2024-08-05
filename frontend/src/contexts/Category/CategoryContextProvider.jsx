import { useState } from "react";
import { CategoryContext } from "./CategoryContext";

function CategoryContextProvider(props) {
    const [activeCategory, setActiveCategory] = useState("all");
    return (
        <CategoryContext.Provider value={{ activeCategory, setActiveCategory }}>
            {props.children}
        </CategoryContext.Provider>
    );
}

export default CategoryContextProvider;
