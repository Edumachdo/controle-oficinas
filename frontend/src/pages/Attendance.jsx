import React, { useEffect, useState } from "react";
import { api } from "../api.js";

export default function Attendance() {
  const [workshops, setWorkshops] = useState([]);
  const [selectedWorkshopId, setSelectedWorkshopId] = useState("");
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    api("/workshops")
      .then((data) => {
        setWorkshops(data);

        if (data.length > 0) {
          setSelectedWorkshopId(data[0]._id);
        }
      })
      .catch((error) => {
        console.error("Erro ao carregar oficinas:", error);
        setError(error.message);
      });
  }, []);

  useEffect(() => {
    if (!selectedWorkshopId) return;

    api(`/attendance/workshop/${selectedWorkshopId}`)
      .then(setItems)
      .catch((error) => {
        console.error("Erro ao carregar presenças:", error);
        setError(error.message);
      });
  }, [selectedWorkshopId]);

  async function toggle(item) {
    try {
      const response = await api(`/attendance/${item._id}`, {
        method: "PUT",
        body: JSON.stringify({ present: !item.present }),
      });

      const updated = response.attendance;

      setItems(
        items.map((i) =>
          i._id === item._id
            ? {
                ...i,
                present: updated.present,
              }
            : i,
        ),
      );
    } catch (error) {
      console.error("Erro ao atualizar presença:", error);
      setError(error.message);
    }
  }

  const total = items.length;
  const presentes = items.filter((i) => i.present).length;
  const ausentes = total - presentes;
  const percent = total ? Math.round((presentes / total) * 100) : 0;

  return (
    <div className="attendancePage">
      <h1>Controle de Presença</h1>
      <p>Registre a presença dos alunos na oficina</p>

      {error && <p className="error">{error}</p>}

      <div className="panel">
        <label>Oficina</label>

        <select
          value={selectedWorkshopId}
          onChange={(e) => setSelectedWorkshopId(e.target.value)}
        >
          {workshops.map((workshop) => (
            <option key={workshop._id} value={workshop._id}>
              {workshop.name} —{" "}
              {new Date(workshop.date).toLocaleDateString("pt-BR")}
            </option>
          ))}
        </select>
      </div>

      <div className="attendanceStats">
        <div className="card">
          <strong>{total}</strong>
          <span>Total</span>
        </div>

        <div className="card green">
          <strong>{presentes}</strong>
          <span>Presentes</span>
        </div>

        <div className="card red">
          <strong>{ausentes}</strong>
          <span>Ausentes</span>
        </div>
      </div>

      <div className="panel">
        <div className="progressText">
          <strong>Taxa de participação</strong>
          <strong>{percent}%</strong>
        </div>

        <div className="progress">
          <div style={{ width: `${percent}%` }} />
        </div>
      </div>

      <div className="panel">
        <h2>Lista de Alunos</h2>

        <div className="studentList">
          {items.length === 0 && (
            <p>Nenhuma inscrição encontrada para esta oficina.</p>
          )}

          {items.map((item) => {
            const studentName = item.student?.name || "Aluno não encontrado";

            return (
              <label
                className={item.present ? 'is-present' : 'is-absent'}
                key={item._id}
              >
                <input
                  type="checkbox"
                  checked={item.present}
                  onChange={() => toggle(item)}
                />

                <span className="miniAvatar">
                  {studentName.slice(0, 2).toUpperCase()}
                </span>

                <strong>{studentName}</strong>

                <em>{item.present ? "Presente" : "Ausente"}</em>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}
