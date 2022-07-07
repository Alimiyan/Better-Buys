import React, { useState, useEffect } from "react";
import Header from "../header/Header";
import axios from "axios";
import Card from "react-bootstrap/Card";
import { Button } from "react-bootstrap";

function Home() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await axios.get("http://127.0.0.1:8000/api/");
    setProducts(response.data);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="p-4">Products</h2>
        <div className="row">
          {products.map((product) => (
            <div className="col-lg-4">
              <Card style={{ width: "18rem", height: "25rem" }}>
                <Card.Img style={{ width: "18rem", height: "13rem" }} variant="top" src={product.image} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text>
                    <b>{product.price} $</b>
                  </Card.Text>
                  <Button variant="primary">Add to Cart</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
