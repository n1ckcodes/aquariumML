const registrationSchema = {
    type: "object",
    properties: {
      username: { type: "string" },
      password: { type: "string" },
      email: { type: "string", format: "email" },
    },
    required: ["username", "email", "password"],
  };

  const loginSchema = {
    type: "object",
    properties: {
      username: { type: "string" },
      password: { type: "string" },
    },
    required: ["username", "password"],
  };
  
  module.exports = {
    loginSchema,
    registrationSchema
  };