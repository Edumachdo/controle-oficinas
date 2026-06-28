const express = require("express");
const Attendance = require("../models/Attendance");

const router = express.Router();

// Listar todas as presenças
router.get("/", async (req, res) => {
  try {

    const attendance = await Attendance.find()
      .populate("student")
      .populate("workshop");

    res.status(200).json(attendance);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

// Buscar uma presença específica
router.get("/:id", async (req, res) => {
  try {

    const attendance = await Attendance.findById(req.params.id)
      .populate("student")
      .populate("workshop");

    if (!attendance) {
      return res.status(404).json({
        message: "Registro não encontrado"
      });
    }

    res.status(200).json(attendance);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

/* Criar inscrição/presença

exemplo req.body:
{
  "workshop": "id_da_oficina",
  "student": "id_do_aluno",
  "present": false
}
*/
router.post("/", async (req, res) => {
  try {

    const attendance = await Attendance.create(req.body);

    res.status(201).json({
      message: "Registro criado com sucesso",
      attendance
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

// Atualizar presença
router.put("/:id", async (req, res) => {
  try {

    const attendance = await Attendance.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!attendance) {
      return res.status(404).json({
        message: "Registro não encontrado"
      });
    }

    res.status(200).json({
      message: "Registro atualizado com sucesso",
      attendance
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

// Remover inscrição/presença
router.delete("/:id", async (req, res) => {
  try {

    const attendance = await Attendance.findByIdAndDelete(
      req.params.id
    );

    if (!attendance) {
      return res.status(404).json({
        message: "Registro não encontrado"
      });
    }

    res.status(200).json({
      message: "Registro removido com sucesso"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

module.exports = router;