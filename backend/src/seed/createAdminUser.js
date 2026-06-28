const bcrypt = require("bcrypt");
const User = require("../models/User");

const createAdminUser = async () => {
  try {
    const adminExists = await User.findOne({
      email: "admin@escola.edu.br"
    });

    if (adminExists) {
      console.log("Usuário administrador já existe.");
      return;
    }

    const hashedPassword = await bcrypt.hash("123456", 10);

    await User.create({
      name: "Administrador",
      email: "admin@escola.edu.br",
      password: hashedPassword,
      phone: "(11) 91111-2222",
      course: "-",
      role: "Administrador",
      status: "Ativo"
    });

    console.log("Usuário administrador criado com sucesso.");
  } catch (error) {
    console.log("Erro ao criar usuário administrador:", error.message);
  }
};

module.exports = createAdminUser;