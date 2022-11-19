const loginSchema = {
  type: "object",
  properties: {
    username: { type: "string" },
    password: { type: "string" },
  },
  required: ["username", "password"],
};

const RegistrationSchema = {
  type: "object",
  properties: {
    username: { type: "string" },
    password: { type: "string" },
    email: { type: "string", format: "email" },
  },
  required: ["username", "email", "password"],
};

module.exports = {
  LoginSchema,
  RegistrationSchema,
};
