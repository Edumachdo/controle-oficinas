const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");

const User = require("../models/User");
const Workshop = require("../models/Workshop");

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  try {
    const totalWorkshops = await Workshop.countDocuments();
    const totalStudents = await User.countDocuments({ role: "Aluno" });
    const totalTeachers = await User.countDocuments({ role: "Professor" });
    const totalTutors = await User.countDocuments({ role: "Tutor" });

    const upcomingWorkshops = await Workshop.find({
      status: { $ne: "Encerrada" },
    })
      .sort({ date: 1 })
      .limit(5)
      .populate("teacher", "name email role")
      .populate("tutor", "name email role");

    res.status(200).json({
      totalWorkshops,
      totalStudents,
      totalTeachers,
      totalTutors,
      upcomingWorkshops,
      activities: [
        "Login realizado no sistema",
        "Dados carregados do backend",
        "Oficinas sincronizadas com MongoDB",
        "Dashboard atualizado com sucesso",
      ],
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;