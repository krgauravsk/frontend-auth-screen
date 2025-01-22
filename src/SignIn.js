import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post("http://localhost:5002/api/signin", {
        email,
        password,
      });

      // Store token and name in localStorage or cookies
      localStorage.setItem("token", data.token);
      localStorage.setItem("name", data.name); // Store name

      navigate("/home"); // Navigate to home page
    } catch (error) {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="authContents">
      <div className="authContainer">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            id="outlined-start-adornment"
            sx={{ m: 1 }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <FormControl
            sx={{ m: 1 }}
            variant="outlined"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          >
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
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
