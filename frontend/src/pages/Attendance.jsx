import React, { useEffect, useState } from "react";
import { api } from "../api.js";
export default function Attendance() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    api("/attendance/1").then(setItems);
  }, []);
  async function toggle(item) {
    const updated = await api(`/attendance/${item.id}`, {
      method: "PATCH",
      body: JSON.stringify({ present: !item.present }),
    });
    setItems(items.map((i) => (i.id === item.id ? updated : i)));
  }
  const total = items.length;
  const presentes = items.filter((i) => i.present).length;
  const ausentes = total - presentes;
  const percent = total ? Math.round((presentes / total) * 100) : 0;
  return (
    <div className="attendancePage">
      <h1>Controle de Presença</h1>
      <p>Registre a presença dos alunos na oficina</p>
      <div className="panel">
        <label>Oficina</label>
        <select>
          <option>Introdução ao Python — 12/05/2026</option>
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
        {items.map((item) => (
          <label
            className={item.present ? "student present" : "student"}
            key={item.id}
          >
            <input
              type="checkbox"
              checked={item.present}
              onChange={() => toggle(item)}
            />
            <span className="miniAvatar">
              {item.student.slice(0, 2).toUpperCase()}
            </span>
            <strong>{item.student}</strong>
            <em>{item.present ? "Presente" : "Ausente"}</em>
          </label>
        ))}
      </div>
    </div>
  );
}
