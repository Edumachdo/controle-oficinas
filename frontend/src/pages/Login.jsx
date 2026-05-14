import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { api } from "../api.js";
export default function Login() {
  const [email, setEmail] = useState("admin@escola.edu.br");
  const [password, setPassword] = useState("123456");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const data = await api("/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      localStorage.setItem("token", data.token);
      navigate("/", { replace: true });
    } catch (err) {
      setError(
        "Não foi possível conectar ao servidor. Verifique se o backend está disponível e use o IP correto.",
      );
      console.error(err);
    }
  }
  return (
    <div className="loginPage">
      <section className="loginHero">
        <div className="brand">
          <div className="brandIcon">
            <BookOpen size={24} />
          </div>
          <div>
            <strong>Controle de Oficinas</strong>
            <span>Sistema Educacional</span>
          </div>
        </div>
        <div className="heroText">
          <h1>
            Gerencie suas <span>oficinas</span> com facilidade.
          </h1>
          <p>
            Controle inscrições, presenças, professores e alunos em um único
            lugar.
          </p>
          <div className="heroStats">
            <strong>
              5+<small>Oficinas</small>
            </strong>
            <strong>
              120+<small>Alunos</small>
            </strong>
            <strong>
              8<small>Professores</small>
            </strong>
          </div>
        </div>
      </section>
      <section className="loginFormArea">
        <form onSubmit={handleSubmit} className="loginForm">
          <h2>Bem-vindo de volta</h2>
          <p>Acesse sua conta para continuar.</p>
          <label>E-mail</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Senha</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Entrar</button>
          {error && <p className="error">{error}</p>}
          <a>Esqueci minha senha</a>
        </form>
      </section>
    </div>
  );
}
