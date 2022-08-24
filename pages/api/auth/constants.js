const registrationSchema = {
    type: "object",
    properties: {
      username: { type: "string" },
      password: { type: "string" },
      email: { type: "string", format: "email" },
    },
    required: ["username", "email", "password"],
  };
  
  module.exports = {
    registrationSchema,
  };