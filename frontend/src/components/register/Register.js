import React from "react";
import Header from "../header/Header";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [mail, setmail] = useState("");
  const [user, setUser] = useState("")
  const [pass, setPass] = useState("")
  const action = (e) => {
    axios.post("http://127.0.0.1:8000/data/signup",{
      email:mail,
      user:user,
      pass:pass
    }).then((res)=>{
      if(res.data==="success"){
        navigate("/home")
      }
      else{
        alert("Invalid Credentials")
      }
    })
  };
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
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              onChange={(e) => {
                setmail(e.target.value);
              }}
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
              onChange={(e) => {
                setPass(e.target.value);
              }}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={action}>
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
