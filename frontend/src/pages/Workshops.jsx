import React, { useEffect, useState } from "react";
import { api } from "../api.js";
import StatusBadge from "../components/StatusBadge.jsx";
const emptyForm = {
  name: "",
  theme: "",
  description: "",
  teacher: "",
  tutor: "",
  date: "",
  time: "",
  location: "",
  maxStudents: 20,
};
export default function Workshops() {
  const [workshops, setWorkshops] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [form, setForm] = useState(emptyForm);
  function load() {
    api(`/workshops?search=${search}`).then(setWorkshops);
  }
  useEffect(() => {
    load();
    api("/users?role=Professor").then(setTeachers);
    api("/users?role=Tutor").then(setTutors);
  }, [search]);
  async function saveWorkshop(e) {
    e.preventDefault();
    await api("/workshops", { method: "POST", body: JSON.stringify(form) });
    setForm(emptyForm);
    setShowForm(false);
    load();
  }

  function openDetails(workshop) {
    setSelectedWorkshop(workshop);
    setShowDetails(true);
  }
  return (
    <>
      <div className="pageHeader">
        <div>
          <h1>Gestão de Oficinas</h1>
          <p>{workshops.length} oficinas cadastradas</p>
        </div>
        <button onClick={() => setShowForm(!showForm)}>+ Nova Oficina</button>
      </div>
      {showForm && (
        <div className="modalOverlay" onClick={() => setShowForm(false)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <form className="formPanel" onSubmit={saveWorkshop}>
              <h2>Cadastro de Oficina</h2>
              
              <label>
                Nome da oficina
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </label>

              <label>
                Tema
                <input
                  type="text"
                  value={form.theme}
                  onChange={(e) => setForm({ ...form, theme: e.target.value })}
                  required
                />
              </label>

              <label>
                Professor responsável
                <select
                  value={form.teacher}
                  onChange={(e) => setForm({ ...form, teacher: e.target.value })}
                  required
                >
                  <option value="" disabled>Selecione um professor</option>
                  {teachers.map(t => <option key={t._id} value={t._id}>{t.name}</option>)}
                </select>
              </label>

              <label>
                Tutor responsável
                <select
                  value={form.tutor}
                  onChange={(e) => setForm({ ...form, tutor: e.target.value })}
                >
                  <option value="">Nenhum</option>
                  {tutors.map(t => <option key={t._id} value={t._id}>{t.name}</option>)}
                </select>
              </label>

              <label>
                Data
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  required
                />
              </label>

              <label>
                Horário
                <input
                  type="text"
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  required
                />
              </label>

              <label>
                Local
                <input
                  type="text"
                  value={form.location}
                  onChange={(e) => setForm({ ...form, location: e.target.value })}
                  required
                />
              </label>

              <label>
                Limite de vagas
                <input
                  type="number"
                  value={form.maxStudents}
                  onChange={(e) => setForm({ ...form, maxStudents: e.target.value })}
                  required
                />
              </label>
              
              <label className="full">
                Descrição
                <textarea
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </label>
              <div className="actions">
                <button
                  type="button"
                  className="secondary"
                  onClick={() => setShowForm(false)}
                >
                  Cancelar
                </button>
                <button>Salvar</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {showDetails && selectedWorkshop && (
        <div className="modalOverlay" onClick={() => setShowDetails(false)}>
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <div className="formPanel oficina">
              <h2>Detalhes da Oficina</h2>
              <div className="workshopDetails">
                <div className="detailRow">
                  <strong>Nome:</strong>
                  <span>{selectedWorkshop.name}</span>
                </div>
                <div className="detailRow">
                  <strong>Tema:</strong>
                  <span>{selectedWorkshop.theme}</span>
                </div>
                <div className="detailRow">
                  <strong>Professor:</strong>
                  <span>{selectedWorkshop.teacher?.name}</span>
                </div>
                <div className="detailRow">
                  <strong>Tutor:</strong>
                  <span>{selectedWorkshop.tutor?.name}</span>
                </div>
                <div className="detailRow">
                  <strong>Data:</strong>
                  <span>{selectedWorkshop.date}</span>
                </div>
                <div className="detailRow">
                  <strong>Horário:</strong>
                  <span>{selectedWorkshop.time}</span>
                </div>
                <div className="detailRow">
                  <strong>Local:</strong>
                  <span>{selectedWorkshop.location}</span>
                </div>
                <div className="detailRow">
                  <strong>Vagas:</strong>
                  <span>
                    {selectedWorkshop.enrolled}/{selectedWorkshop.maxStudents}
                  </span>
                </div>
                <div className="detailRow">
                  <strong>Status:</strong>
                  <StatusBadge status={selectedWorkshop.status} />
                </div>
                {selectedWorkshop.description && (
                  <div className="detailRow full">
                    <strong>Descrição:</strong>
                    <p>{selectedWorkshop.description}</p>
                  </div>
                )}
              </div>
              <div className="actions">
                <button
                  type="button"
                  className="secondary"
                  onClick={() => setShowDetails(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <input
        className="searchInput"
        placeholder="Buscar por nome ou tema..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="workshopGrid">
        {workshops.map((w) => {
          const percent = Math.min(100, (w.enrolled / w.maxStudents) * 100);
          return (
            <div className="workshopCard" key={w._id}>
              <div className="workshopAccent" />
              <div className="workshopTop">
                <div>
                  <h2>{w.name}</h2>
                  <p>{w.theme}</p>
                </div>
                <StatusBadge status={w.status} />
              </div>
              <div className="workshopInfo">
                <span>
                  {w.date} • {w.time}
                </span>
                <span>{w.location}</span>
                <span>Prof. {w.teacher?.name}</span>
              </div>
              <div className="progressText">
                <span>Vagas preenchidas</span>
                <strong>
                  {w.enrolled}/{w.maxStudents}
                </strong>
              </div>
              <div className="progress">
                <div style={{ width: `${percent}%` }} />
              </div>
              <button className="detailsButton" onClick={() => openDetails(w)}>
                Ver detalhes
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}
