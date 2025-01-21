import React from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/signin");
  };


  return (
    <div className="homePage">
      <header>
        <h1>Home Page</h1>
        <button onClick={handleLogout}>Log Out</button>
      </header>
      <main className="container">
        <p>Welcome to the home page!</p>
      </main>
    </div>
  );
};


export default Home;



