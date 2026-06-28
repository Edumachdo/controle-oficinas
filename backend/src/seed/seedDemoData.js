const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const connectDB = require("../config/db");
const User = require("../models/User");
const Workshop = require("../models/Workshop");
const Attendance = require("../models/Attendance");

const defaultPassword = "123456";

const usersData = [
  {
    name: "Carlos Mendes",
    email: "carlos.mendes@escola.edu.br",
    phone: "(11) 98765-4321",
    course: "Ciência da Computação",
    role: "Professor",
    status: "Ativo",
  },
  {
    name: "Beatriz Souza",
    email: "beatriz.souza@escola.edu.br",
    phone: "(11) 98776-5432",
    course: "Design Gráfico",
    role: "Professor",
    status: "Ativo",
  },
  {
    name: "Ana Lima",
    email: "ana.lima@escola.edu.br",
    phone: "(11) 97654-3210",
    course: "Sistemas de Informação",
    role: "Tutor",
    status: "Ativo",
  },
  {
    name: "Rafael Costa",
    email: "rafael.costa@escola.edu.br",
    phone: "(11) 96543-2109",
    course: "Design Digital",
    role: "Tutor",
    status: "Ativo",
  },
  {
    name: "Marina Oliveira",
    email: "marina.oliveira@escola.edu.br",
    phone: "(11) 9432-1098",
    course: "Análise de Sistemas",
    role: "Aluno",
    status: "Ativo",
  },
  {
    name: "Pedro Alves",
    email: "pedro.alves@escola.edu.br",
    phone: "(11) 94321-0987",
    course: "Engenharia de Software",
    role: "Aluno",
    status: "Ativo",
  },
  {
    name: "Fernanda Lopes",
    email: "fernanda.lopes@escola.edu.br",
    phone: "(11) 93210-9876",
    course: "Ciência de Dados",
    role: "Aluno",
    status: "Inativo",
  },

  // Usuários que aparecem nas oficinas/presenças, mas não estavam completos no data.js
  {
    name: "Henrique Alves",
    email: "henrique.alves@escola.edu.br",
    phone: "(11) 90000-0001",
    course: "Tecnologia",
    role: "Professor",
    status: "Ativo",
  },
  {
    name: "Márcia Ferreira",
    email: "marcia.ferreira@escola.edu.br",
    phone: "(11) 90000-0002",
    course: "Arte",
    role: "Professor",
    status: "Ativo",
  },
  {
    name: "Rodrigo Nunes",
    email: "rodrigo.nunes@escola.edu.br",
    phone: "(11) 90000-0003",
    course: "Negócios",
    role: "Professor",
    status: "Ativo",
  },
  {
    name: "Gabriel Santos",
    email: "gabriel.santos@escola.edu.br",
    phone: "(11) 90000-0004",
    course: "Sistemas de Informação",
    role: "Aluno",
    status: "Ativo",
  },
  {
    name: "Isabela Carmo",
    email: "isabela.carmo@escola.edu.br",
    phone: "(11) 90000-0005",
    course: "Sistemas de Informação",
    role: "Aluno",
    status: "Ativo",
  },
  {
    name: "Thiago Ramos",
    email: "thiago.ramos@escola.edu.br",
    phone: "(11) 90000-0006",
    course: "Sistemas de Informação",
    role: "Aluno",
    status: "Ativo",
  },
  {
    name: "Larissa Melo",
    email: "larissa.melo@escola.edu.br",
    phone: "(11) 90000-0007",
    course: "Sistemas de Informação",
    role: "Aluno",
    status: "Ativo",
  },
  {
    name: "Diego Ferreira",
    email: "diego.ferreira@escola.edu.br",
    phone: "(11) 90000-0008",
    course: "Sistemas de Informação",
    role: "Aluno",
    status: "Ativo",
  },
];

const workshopsData = [
  {
    fakeId: 1,
    name: "Introdução ao Python",
    theme: "Programação",
    description: "Oficina introdutória sobre lógica de programação com Python.",
    teacher: "Carlos Mendes",
    tutor: "Ana Lima",
    date: "2026-05-12",
    time: "14:00 - 17:00",
    location: "Lab. Informática A",
    maxStudents: 30,
    enrolled: 24,
    status: "Ativa",
  },
  {
    fakeId: 2,
    name: "Design UX/UI",
    theme: "Design",
    description: "Conceitos básicos de UX e UI aplicados a produtos digitais.",
    teacher: "Beatriz Souza",
    tutor: "Rafael Costa",
    date: "2026-05-15",
    time: "09:00 - 12:00",
    location: "Sala de Design",
    maxStudents: 20,
    enrolled: 20,
    status: "Ativa",
  },
  {
    fakeId: 3,
    name: "Robótica Educacional",
    theme: "Tecnologia",
    description: "Introdução ao uso de robótica em atividades educacionais.",
    teacher: "Henrique Alves",
    tutor: "Ana Lima",
    date: "2026-05-20",
    time: "13:00 - 16:00",
    location: "Lab. Maker",
    maxStudents: 15,
    enrolled: 9,
    status: "Planejada",
  },
  {
    fakeId: 4,
    name: "Fotografia Básica",
    theme: "Arte",
    description: "Fundamentos de fotografia, composição e iluminação.",
    teacher: "Márcia Ferreira",
    tutor: "Rafael Costa",
    date: "2026-04-30",
    time: "10:00 - 13:00",
    location: "Estúdio B",
    maxStudents: 12,
    enrolled: 12,
    status: "Encerrada",
  },
  {
    fakeId: 5,
    name: "Empreendedorismo",
    theme: "Negócios",
    description: "Conceitos iniciais para criação de pequenos negócios.",
    teacher: "Rodrigo Nunes",
    tutor: "Ana Lima",
    date: "2026-05-28",
    time: "15:00 - 18:00",
    location: "Auditório Central",
    maxStudents: 50,
    enrolled: 31,
    status: "Planejada",
  },
];

const attendanceData = [
  { workshopId: 1, student: "Marina Oliveira", present: true },
  { workshopId: 1, student: "Pedro Alves", present: true },
  { workshopId: 1, student: "Fernanda Lopes", present: false },
  { workshopId: 1, student: "Gabriel Santos", present: true },
  { workshopId: 1, student: "Isabela Carmo", present: false },
  { workshopId: 1, student: "Thiago Ramos", present: true },
  { workshopId: 1, student: "Larissa Melo", present: true },
  { workshopId: 1, student: "Diego Ferreira", present: false },
];

const seedDemoData = async () => {
  try {
    await connectDB();

    const hashedPassword = await bcrypt.hash(defaultPassword, 10);

    const userMap = {};

    for (const userData of usersData) {
      let user = await User.findOne({ email: userData.email });

      if (!user) {
        user = await User.create({
          ...userData,
          password: hashedPassword,
        });
      }

      userMap[user.name] = user._id;
    }

    const workshopMap = {};

    for (const workshopData of workshopsData) {
      let workshop = await Workshop.findOne({ name: workshopData.name });

      if (!workshop) {
        workshop = await Workshop.create({
          name: workshopData.name,
          theme: workshopData.theme,
          description: workshopData.description,
          teacher: userMap[workshopData.teacher],
          tutor: userMap[workshopData.tutor],
          date: workshopData.date,
          time: workshopData.time,
          location: workshopData.location,
          maxStudents: workshopData.maxStudents,
          enrolled: workshopData.enrolled,
          status: workshopData.status,
        });
      }

      workshopMap[workshopData.fakeId] = workshop._id;
    }

    for (const attendanceItem of attendanceData) {
      const workshopId = workshopMap[attendanceItem.workshopId];
      const studentId = userMap[attendanceItem.student];

      const attendanceExists = await Attendance.findOne({
        workshop: workshopId,
        student: studentId,
      });

      if (!attendanceExists) {
        await Attendance.create({
          workshop: workshopId,
          student: studentId,
          present: attendanceItem.present,
        });
      }
    }

    console.log("Dados de demonstração inseridos com sucesso.");
    process.exit(0);
  } catch (error) {
    console.error("Erro ao inserir dados de demonstração:", error.message);
    process.exit(1);
  } finally {
    await mongoose.connection.close();
  }
};

seedDemoData();