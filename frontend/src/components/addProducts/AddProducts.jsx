import axios from "axios";
import React, { useState } from "react";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

function AddProducts() {
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const addProductInfo = async () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    if (image !== null) {
      formData.append("image", image);
    }
    await axios({
      method: "post",
      url: "http://localhost:8000/api/",
      data: formData,
    }).then((response) => {
      console.log(response.data);
      navigate("/");
    });
  };

  return (
    <div>
      <Header />
      <h2 className="p-4">Add Products</h2>
      <div className="container">
        <div className="form-group">
            <input
              type="file"
              className="form-control form-control-lg m-3"
              name="image"
              src={image}
              onChange={(e) => setImage(e.target.files[0])}
            />
            <input
              type="text"
              className="form-control form-control-lg m-3"
              placeholder="Enter Product name"
              name="name"
              value={name}  
              onChange={(e) => setName(e.target.value)}
            />
          <input
            type="text"
            className="form-control form-control-lg m-3"
            placeholder="Enter the Price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            type="text"
            className="form-control form-control-lg m-3"
            placeholder="Enter the Category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <textarea
            type="text"
            className="form-control form-control-lg m-3"
            placeholder="Enter the Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn btn-success" onClick={addProductInfo}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;
