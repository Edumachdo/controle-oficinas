import React, { useEffect, useState } from "react";
import { api } from "../api.js";
import StatusBadge from "../components/StatusBadge.jsx";
export default function Dashboard() {
  const [data, setData] = useState(null);
  useEffect(() => {
  api("/dashboard")
    .then(setData)
    .catch((error) => {
      console.error("Erro ao carregar dashboard:", error);
    });
}, []);
  if (!data) return <p>Carregando...</p>;
  return (
    <>
      <h1>Dashboard</h1>
      <div className="statsGrid">
        <div className="card">
          <span>Total de Oficinas</span>
          <strong>{data.totalWorkshops}</strong>
          <small>+2 este mês</small>
        </div>
        <div className="card">
          <span>Total de Alunos</span>
          <strong>{data.totalStudents}</strong>
          <small>+14 este mês</small>
        </div>
        <div className="card">
          <span>Professores</span>
          <strong>{data.totalTeachers}</strong>
          <small>Estável</small>
        </div>
        <div className="card">
          <span>Tutores</span>
          <strong>{data.totalTutors}</strong>
          <small>+1 este mês</small>
        </div>
      </div>
      <div className="dashboardGrid">
        <div className="panel">
          <h2>Inscrições por mês</h2>
          <div className="chart">
            {[2, 4, 3, 6, 5, 8].map((v, i) => (
              <div key={i} className="barWrap">
                <div className="bar" style={{ height: `${v * 22}px` }} />
                <span>{["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"][i]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="panel">
          <h2>Atividade Recente</h2>
          <ul className="activity">
            {data.activities.map((item) => (
              <li key={item}>
                {item}
                <small>há poucos minutos</small>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="panel">
        <h2>Próximas Oficinas</h2>
        {data.upcomingWorkshops.map((w) => (
          <div key={w.id} className="upcomingItem">
            <div>
              <strong>{w.name}</strong>
              <span>
                {w.date} • {w.time}
              </span>
            </div>
            <div>
              <StatusBadge status={w.status} />
              <small>
                {w.enrolled}/{w.maxStudents} vagas
              </small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
