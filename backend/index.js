require('dotenv').config();

const express = require('express')
const cors = require('cors');

const app = express()

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

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API rodando!");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });






