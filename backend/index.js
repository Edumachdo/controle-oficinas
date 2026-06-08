require('dotenv').config();

const connectDB = require("./src/config/db");

const User = require("./src/models/User");

const express = require('express')
const cors = require('cors');

const app = express()

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000'
];


const corsOptions = {
  origin: (origin, callback) => {
    if (!origin) return callback(null, true); 

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {

      callback(new Error('Not allowed by CORS'));
    }
  }
};

app.use(cors(corsOptions));

const PORT = process.env.PORT || 3000;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API rodando!");
});


app.get("/test-user", async (req, res) => {
  try {
    const user = await User.create({
      name: "Administrador",
      email: "admin@escola.edu.br",
      password: "123456",
      role: "Administrador"
    });

    res.json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});







app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });






