require('dotenv').config();

const connectDB = require("./src/config/db");

const User = require("./src/models/User");
const userRoutes = require("./src/routes/userRoutes");
const workshopRoutes = require("./src/routes/workshopRoutes");
const attendanceRoutes = require('./src/routes/attendanceRoutes');
const createAdminUser = require("./src/seed/createAdminUser");

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

app.use("/users", userRoutes);
app.use("/workshops", workshopRoutes);
app.use("/attendance", attendanceRoutes);


const startServer = async () => {
  await connectDB();

  await createAdminUser();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

startServer();






