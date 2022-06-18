import React from "react";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="container w-50">
        <form>
          <h3 className="p-3">Sign Up</h3>
          <div className="mb-3">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="username"
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password1"
            />
          </div>
          <div className="mb-3">
            <label>Retype Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="password2"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already registered{" "}
            <a href="#" onClick={() => navigate("/login")}>
              sign in?
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
