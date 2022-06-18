import React from "react";
import { Button } from "react-bootstrap";
import Header from "../header/Header";
import "./Cart.css";

function Cart() {
  return (
    <div>
      <Header />
      <div className="container p-5">
        <hr />
        <h4 className="">Price Details</h4>
        <hr />
        <table class="table table-dark">
          <thead>
              <th scope="col">Price</th>
              <th scope="col">Discount</th>
              <th scope="col">Delivery Charges</th>
              <th scope="col">Total Amount</th>
          </thead>
          <tbody>
            <tr>
              <td>$90.0</td>
              <td>$10.0</td>
              <td>$1.0</td>
              <td>$81.0</td>
            </tr>
          </tbody>
        </table>

        <hr />
        <h4>Cart Items</h4>
        <hr />
        <table class="table table-dark">
          <thead>
            <th>#</th>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
          </thead>
          <tbody>
            <tr>
              <td data-label="">1</td>
              <td data-label="">img</td>
              <td data-label="">Dinesh</td>
              <td data-label="">mb</td>
              <td data-label="">$10.0</td>
              <td className="td-btn" data-label="">
                <Button variant="outline-danger mx-3">-</Button>
                10
                <Button variant="outline-success mx-3">+</Button>
              </td>
            </tr>

            <tr>
              <td data-label="">1</td>
              <td data-label="">img</td>
              <td data-label="">Dinesh</td>
              <td data-label="">mb</td>
              <td data-label="">$10.0</td>
              <td className="td-btn" data-label="">
                <Button variant="outline-danger mx-3">-</Button>
                10
                <Button variant="outline-success mx-3">+</Button>
              </td>
            </tr>

            <tr>
              <td data-label="">1</td>
              <td data-label="">img</td>
              <td data-label="">Dinesh</td>
              <td data-label="">mb</td>
              <td data-label="">$10.0</td>
              <td className="td-btn" data-label="">
                <Button variant="outline-danger mx-3">-</Button>
                10
                <Button variant="outline-success mx-3">+</Button>
              </td>
            </tr>

            <tr>
              <td data-label="">1</td>
              <td data-label="">img</td>
              <td data-label="">Dinesh</td>
              <td data-label="">mb</td>
              <td data-label="">$10.0</td>
              <td className="td-btn" data-label="">
                <Button variant="outline-danger mx-3">-</Button>
                10
                <Button variant="outline-success mx-3">+</Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
