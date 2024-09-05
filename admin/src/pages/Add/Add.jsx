import "./Add.css";
import { assets } from "./../../assets/assets.js";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

function Add() {
    const URL = "http://localhost:9999/api/food/add";
    const [image, setImage] = useState(false);
    const [data, setData] = useState({
        name: "",
        description: "",
        category: "Salad",
        price: "",
    });

    const handleInputChange = (event) => {
        console.log(event);
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        setData((prev) => ({ ...prev, [name]: value }));
    };

    const submitForm = async (event) => {
        event.preventDefault();
        const formData = new FormData();

        if (
            data.name === "" ||
            data.description == "" ||
            data.category == "" ||
            data.price == "" ||
            image === false
        )
            return toast.error("All fields are required");

        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("category", data.category);
        formData.append("price", data.price);
        formData.append("image", image);

        try {
            const response = await fetch(URL, {
                method: "POST",
                body: formData,
            });

            if (!response.ok) throw "Error while fetching data";

            const responseData = await response.json();
            console.log(responseData);
            if (!responseData.success) return toast.error(responseData.message);

            toast.success("Product added successfully");
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <div>
            <ToastContainer />
            <form className="admin-form" onSubmit={(e) => submitForm(e)}>
                <div className="admin-form-upload admin-form-item">
                    <p>Upload</p>
                    <label htmlFor="upload">
                        <img
                            src={image ? window.URL.createObjectURL(image) : assets.upload_area}
                            alt=""
                        />
                    </label>
                    <input
                        onChange={(e) => setImage(e.target.files[0])}
                        type="file"
                        name="upload"
                        id="upload"
                        hidden
                    />
                </div>
                <div className="admin-form-product-name admin-form-item">
                    <p>Product Name</p>
                    <input
                        type="text"
                        placeholder="Add Product Name"
                        value={data["name"]}
                        onChange={(e) => handleInputChange(e)}
                        name="name"
                    />
                </div>
                <div className="admin-form-product-description admin-form-item">
                    <p>Product Description</p>
                    <textarea
                        name="description"
                        id="product-description"
                        rows={10}
                        cols={40}
                        placeholder="Add Product Description"
                        value={data["description"]}
                        onChange={(e) => handleInputChange(e)}
                    ></textarea>
                </div>
                <div className="admin-form-items admin-form-item">
                    <div className="admin-form-product-category admin-form-item">
                        <p>Product Category</p>

                        <select
                            name="category"
                            id="category"
                            value={data["category"]}
                            onChange={(e) => handleInputChange(e)}
                        >
                            <option value="Salad">Salad</option>
                            <option value="adc">abc</option>
                            <option value="PqR">PqR</option>
                        </select>
                    </div>
                    <div className="admin-form-product-price admin-form-item">
                        <p>Product Price</p>
                        <input
                            value={data["price"]}
                            name="price"
                            onChange={(e) => handleInputChange(e)}
                        />
                    </div>
                </div>
                <div className="admin-form-add-btn admin-form-item">
                    <input type="submit" value="ADD" />
                </div>
            </form>
        </div>
    );
}

export default Add;
