const mongoose = require("mongoose");

const workshopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    theme: {
      type: String,
      required: true
    },

    description: {
      type: String,
      required: true
    },

    teacher: {
      type: String,
      required: true
    },

    tutor: {
      type: String
    },

    date: {
      type: Date,
      required: true
    },

    time: {
      type: String,
      required: true
    },

    location: {
      type: String,
      required: true
    },

    maxStudents: {
      type: Number,
      required: true,
      min: 1
    },

    enrolled: {
      type: Number,
      default: 0
    },

    status: {
      type: String,
      enum: [
        "Planejada",
        "Ativa",
        "Encerrada",
        "Cancelada"
      ],
      default: "Planejada"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Workshop",
  workshopSchema
);