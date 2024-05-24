import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dados de Login:", { username, password });

    navigate("/home");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1>Acesse o sistema</h1>
        <div className="input-field">
          <input
            type="text"
            placeholder="E-mail"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <FaUser className="icon" />
        </div>
        <div className="input-field">
          <input
            type="password"
            placeholder="Senha"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FaLock className="icon" />
        </div>

        <div className="recall-forget">
          <label>
            <input type="checkbox" />
            Lembrar identificação
          </label>
          <a href="#">Esqueceu sua senha?</a>
        </div>
        <button type="submit">Acessar</button>
        <div className="signup-link">
          <p>
            Não tem uma conta?
            <Link to="/register">
              Registar
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
