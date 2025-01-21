import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5002/api/signin", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      navigate("/home");
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="authContents">
      <div className="authContainer">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
        <p>
          <a href="/signup">Sign Up</a> |{" "}
          <a href="/forgot-password">Forgot Password?</a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
