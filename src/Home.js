import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate();


  const [name, setName] = useState("");


  useEffect(() => {
    // Retrieve the name from localStorage or cookies
    const userName = localStorage.getItem("name");
    setName(userName);
  }, []);


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
     <p> {name && <h2>Hello, {name}!</h2>}</p>
      </main>
    </div>
  );
};


export default Home;