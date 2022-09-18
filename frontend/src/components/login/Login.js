import React from "react";
import Header from "../header/Header";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Login() {
  const navigate = useNavigate();
  const [mail, setmail] = useState("");
  const [password, setpassword] = useState("");
  const [login, setLogin] = useState(false);
  const mailAction = (e) => {
    setmail(e.target.value);
  };
  const passAction = (e) => {
    setpassword(e.target.value);
  };
  const validate = () => {
    axios
      .post("http://127.0.0.1:8000/data/login", {
        email: mail,
        password: password,
      })
      .then((res) => {
        if (res.data.status === "success") {
          Cookies.set("token", res.data.token);
          window.location.href = "/home";
          setLogin(true);
        } else {
          alert("Invalid Credentials");
          window.location.reload();
        }
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <Header />
      <div className="container p-3 w-50">
        <form action="" method="post">
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => {
                mailAction(e);
              }}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => {
                passAction(e);
              }}
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={validate}
            >
              Submit
            </button>
          </div>
          <p className="login-alt text-right">
            Don't have an account ?
            <a href="#" onClick={() => navigate("/register")}>
              {" "}
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
