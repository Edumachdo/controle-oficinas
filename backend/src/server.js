import express from "express";
import cors from "cors";
import { users, workshops, attendance } from "./data.js";
const app = express();
const PORT = 3001;
app.use(cors());
app.use(express.json());
app.post("/api/login", (req, res) =>
  res.json({
    token: "fake-token",
    user: {
      name: "Administrador",
      email: req.body.email || "admin@escola.edu.br",
      role: "Administrador",
    },
  }),
);
app.get("/api/dashboard", (req, res) =>
  res.json({
    totalWorkshops: workshops.length,
    totalStudents: users.filter((u) => u.role === "Aluno").length,
    totalTeachers: users.filter((u) => u.role === "Professor").length,
    totalTutors: users.filter((u) => u.role === "Tutor").length,
    upcomingWorkshops: workshops.filter((w) => w.status !== "Encerrada"),
    activities: [
      "Nova inscrição em Introdução ao Python",
      "Oficina Design UX/UI está com vagas esgotadas",
      "Lista de presença confirmada - Fotografia Básica",
      "Nova oficina de Empreendedorismo cadastrada",
    ],
  }),
);
app.get("/api/workshops", (req, res) => {
  const { search = "", status = "" } = req.query;
  res.json(
    workshops.filter(
      (w) =>
        (w.name.toLowerCase().includes(search.toLowerCase()) ||
          w.theme.toLowerCase().includes(search.toLowerCase())) &&
        (status ? w.status === status : true),
    ),
  );
});
app.post("/api/workshops", (req, res) => {
  const item = {
    id: workshops.length + 1,
    enrolled: 0,
    status: "Planejada",
    ...req.body,
  };
  workshops.push(item);
  res.status(201).json(item);
});
app.get("/api/users", (req, res) => {
  const { search = "", role = "" } = req.query;
  res.json(
    users.filter(
      (u) =>
        (u.name.toLowerCase().includes(search.toLowerCase()) ||
          u.email.toLowerCase().includes(search.toLowerCase())) &&
        (role ? u.role === role : true),
    ),
  );
});
app.get("/api/attendance/:workshopId", (req, res) =>
  res.json(
    attendance.filter((a) => a.workshopId === Number(req.params.workshopId)),
  ),
);
app.patch("/api/attendance/:id", (req, res) => {
  const item = attendance.find((a) => a.id === Number(req.params.id));
  if (!item)
    return res.status(404).json({ message: "Registro não encontrado" });
  item.present = req.body.present;
  res.json(item);
});
app.listen(PORT, () => console.log(`API rodando em http://localhost:${PORT}`));
