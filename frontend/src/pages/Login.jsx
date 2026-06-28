import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BookOpen } from "lucide-react";
import { api } from "../api.js";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const data = await api("/users/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      localStorage.setItem("token", data.token);

      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message || "E-mail ou senha inválidos.");
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
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Senha</label>
          <input
            type="password"
            value={password}
            placeholder="Digite sua senha"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Entrar</button>

          {error && <p className="error">{error}</p>}

          <a>Esqueci minha senha</a>
        </form>
      </section>
    </div>
  );
}