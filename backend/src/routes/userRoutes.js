const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");

const User = require("../models/User");

const router = express.Router();

//retorna todos os usuarios (requer token)
router.get("/",authMiddleware, async (req, res) => {
  try {
    const { role } = req.query;
    const filter = role ? { role } : {};
    const users = await User.find(filter);

    res.status(200).json(users);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

//cadastra um usuario(requer token)
router.post("/",authMiddleware, async (req, res) => {
  try {
    const { name, email, password, phone, course, role } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "Email já cadastrado"
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      course,
      role
    });

    res.status(201).json({
      message: "Usuário criado com sucesso",
      user
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
});

/*rota para login
usuario administrador pre cadastrado para teste:
  "email": "admin2@escola.edu.br",
  "password": "123456"
*/
router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({
      message: "Credenciais inválidas"
    });
  }

  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    return res.status(401).json({
      message: "Credenciais inválidas"
    });
  }

  const token = jwt.sign(
  {
    id: user._id,
    email: user.email,
    role: user.role
  },
  process.env.JWT_SECRET,
  {
    expiresIn: "1h"
  }
);

res.status(200).json({
  message: "Login realizado com sucesso",
  token
});

});


module.exports = router;