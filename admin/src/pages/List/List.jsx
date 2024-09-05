import React, { useEffect, useState } from "react";

function Remove() {
    const BACKEND_URL = "http://localhost:9999";
    const MAIN_URL = "/api/food/list";

    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchFood = async () => {
            const response = await fetch(BACKEND_URL + MAIN_URL);
            if (response.ok) {
                const resData = await response.json();
                console.log(resData);
                setFoods(resData.data);
            }
        };

        fetchFood();
    }, []);

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {foods.map((food, key) => (
                        <tr key={key}>
                            {console.log(`${BACKEND_URL}/images/${food.image}`)}
                            <td>
                                <img src={`${BACKEND_URL}/images/${food.image}`} alt="" />
                            </td>
                            <td>{food.name}</td>
                            <td>{food.category}</td>
                            <td>{food.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Remove;
