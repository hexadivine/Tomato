import { useEffect, useState } from "react";
import "./List.css";
import { toast, ToastContainer } from "react-toastify";

function List() {
    const BACKEND_URL = "http://localhost:9999";
    const LIST_FOOD_ENDPOINT = "/api/food/list";
    const REMOVE_FOOD_ENDPOINT = "/api/food/remove";

    const [foods, setFoods] = useState([]);

    const fetchFood = async () => {
        const response = await fetch(BACKEND_URL + LIST_FOOD_ENDPOINT);
        if (response.ok) {
            const resData = await response.json();
            console.log(resData);
            setFoods(resData.data);
        }
    };

    useEffect(() => {
        fetchFood();
    }, []);

    const removeFood = async (id) => {
        await fetch(BACKEND_URL + REMOVE_FOOD_ENDPOINT, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id }), // Sending ID in the request body
        });
        fetchFood();
        toast.success("Food removed successfully");

        await fe;
    };

    return (
        <>
            <ToastContainer />
            <div className="food-list">
                <div className="food-list-heading">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Price</b>
                    <b>Remove</b>
                </div>
                {foods.length === 0 ? (
                    <p className="no-foods">Add foods from the left side "Add" page</p>
                ) : (
                    foods.map((food, key) => (
                        <div key={key} className="food-list-data">
                            <img src={`${BACKEND_URL}/images/${food.image}`} alt="" />
                            <p>{food.name}</p>
                            <p>{food.category}</p>
                            <p>{food.price}</p>
                            <p onClick={() => removeFood(food._id)}>x</p>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default List;
