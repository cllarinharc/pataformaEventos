import { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import "./Home.css";

const Home = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Dados de Home:", { username, password });
  };

  return (
    <div className="container">
        <h1>Acesse o sistema</h1>
    </div>
  );
};

export default Home;