const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    },

    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true
    },

  password: {
    type: String,
    required: true
  },

    phone: {
      type: String
    },

    course: {
      type: String
    },

    role: {
      type: String,
      enum: ["Administrador", "Professor", "Tutor", "Aluno"],
      required: true
    },

    status: {
      type: String,
      enum: ["Ativo", "Inativo"],
      default: "Ativo"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("User", userSchema);