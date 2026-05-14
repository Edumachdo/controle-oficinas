import React from "react";
export default function StatusBadge({ status }) {
  const cls =
    {
      Ativa: "badge success",
      Ativo: "badge success",
      Planejada: "badge warning",
      Encerrada: "badge muted",
      Inativo: "badge muted",
      Professor: "badge blue",
      Tutor: "badge warning",
      Aluno: "badge success",
      Administrador: "badge purple",
    }[status] || "badge";
  return <span className={cls}>{status}</span>;
}
