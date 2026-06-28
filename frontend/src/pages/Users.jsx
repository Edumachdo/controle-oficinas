import React, { useEffect, useState } from "react";
import { api } from "../api.js";
import StatusBadge from "../components/StatusBadge.jsx";
const emptyForm = {
  name: "",
  email: "",
  password: "",
  phone: "",
  course: "",
  role: "Aluno",
};
export default function Users() {
  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    api(`/users?search=${search}&role=${role}`).then(setUsers);
    api("/workshops").then((workshops) => {
      const activeCourses = workshops
        .filter((w) => w.status === "Ativa" || w.status === "Planejada")
        .map((w) => w.name)
        .filter((name, index, arr) => arr.indexOf(name) === index);
      setCourses(activeCourses);
    });
  }, [search, role]);

  function formatPhone(value) {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    return value;
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleEmailChange(e) {
    const value = e.target.value;
    setForm({ ...form, email: value });
    if (value && !validateEmail(value)) {
      setEmailError("E-mail inválido");
    } else {
      setEmailError("");
    }
  }

  function handlePhoneChange(e) {
    const formatted = formatPhone(e.target.value);
    setForm({ ...form, phone: formatted });
  }

  async function saveUser(e) {
    e.preventDefault();
    if (!validateEmail(form.email)) {
      setEmailError("E-mail inválido");
      return;
    }
    await api("/users", { method: "POST", body: JSON.stringify(form) });
    setForm(emptyForm);
    setShowForm(false);
    setEmailError("");
    api(`/users?search=${search}&role=${role}`).then(setUsers);
  }
  return (
    <>
      <div className="pageHeader">
        <div>
          <h1>Gestão de Usuários</h1>
          <p>{users.length} usuários cadastrados</p>
        </div>
        <button onClick={() => setShowForm(true)}>+ Novo Usuário</button>
      </div>
      {showForm && (
        <div className="modalOverlay" onClick={() => setShowForm(false)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <form className="formPanel" onSubmit={saveUser}>
              <h2>Cadastro de Usuário</h2>
              <label>
                Nome completo
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </label>
              <label>
                E-mail
                <input
                  type="email"
                  value={form.email}
                  onChange={handleEmailChange}
                  required
                />
                {emailError && <span className="error">{emailError}</span>}
              </label>
              <label>
                Senha
                <input
                  type="password"
                  value={form.password}
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                  required
                />
              </label>
              <label>
                Telefone
                <input
                  type="text"
                  value={form.phone}
                  onChange={handlePhoneChange}
                  placeholder="(11) 99999-9999"
                  required
                />
              </label>
              <label>
                Curso
                <select
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  required
                >
                  <option value="">Selecione um curso</option>
                  {courses.map((course) => (
                    <option key={course} value={course}>
                      {course}
                    </option>
                  ))}
                </select>
              </label>
              <label className="full">
                Tipo de perfil
                <select
                  value={form.role}
                  onChange={(e) => setForm({ ...form, role: e.target.value })}
                  required
                >
                  <option value="Aluno">Aluno</option>
                  <option value="Professor">Professor</option>
                  <option value="Tutor">Tutor</option>
                  <option value="Administrador">Administrador</option>
                </select>
              </label>
              <div className="actions">
                <button
                  type="button"
                  className="secondary"
                  onClick={() => {
                    setShowForm(false);
                    setEmailError("");
                  }}
                >
                  Cancelar
                </button>
                <button disabled={!!emailError}>Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
      <div className="filters">
        <input
          placeholder="Buscar por nome ou e-mail..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Todos os perfis</option>
          <option value="Professor">Professor</option>
          <option value="Tutor">Tutor</option>
          <option value="Aluno">Aluno</option>
          <option value="Administrador">Administrador</option>
        </select>
      </div>
      <div className="tablePanel">
        <table>
          <thead>
            <tr>
              <th>Usuário</th>
              <th>Contato</th>
              <th>Curso</th>
              <th>Perfil</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u._id}>
                <td>
                  <span className="miniAvatar">
                    {u.name.slice(0, 2).toUpperCase()}
                  </span>
                  {u.name}
                </td>
                <td>
                  {u.email}
                  <small>{u.phone}</small>
                </td>
                <td>{u.course}</td>
                <td>
                  <StatusBadge status={u.role} />
                </td>
                <td>
                  <StatusBadge status={u.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
