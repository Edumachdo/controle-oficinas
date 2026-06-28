const express = require("express");
const Workshop = require("../models/Workshop");

const router = express.Router();

//criar uma oficina
router.post("/", async (req, res) => {
  try {

    const workshop = await Workshop.create(req.body);

    res.status(201).json({
      message: "Oficina criada com sucesso",
      workshop
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

//listar todas oficianas
router.get("/", async (req, res) => {
  try {

    const workshops = await Workshop.find();

    res.status(200).json(workshops);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

//buscar oficina por id
router.get("/:id", async (req, res) => {
  try {

    const workshop = await Workshop.findById(req.params.id);

    if (!workshop) {
      return res.status(404).json({
        message: "Oficina não encontrada"
      });
    }

    res.status(200).json(workshop);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

//alterar oficina
router.put("/:id", async (req, res) => {
  try {

    const workshop = await Workshop.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true
      }
    );

    if (!workshop) {
      return res.status(404).json({
        message: "Oficina não encontrada"
      });
    }

    res.status(200).json({
      message: "Oficina atualizada com sucesso",
      workshop
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});

//excluir uma oficina pelo id
router.delete("/:id", async (req, res) => {
  try {

    const workshop = await Workshop.findByIdAndDelete(
      req.params.id
    );

    if (!workshop) {
      return res.status(404).json({
        message: "Oficina não encontrada"
      });
    }

    res.status(200).json({
      message: "Oficina removida com sucesso"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
});



module.exports = router;