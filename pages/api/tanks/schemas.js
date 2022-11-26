const CreateTankSchema = {
    type: "object",
    properties: {
      userId: {"type": "integer", "minimum": 1},
      name: { type: "string" },
    },
    required: ["userId", "name"],
  };
  

  
  module.exports = {
    CreateTankSchema
  };
  