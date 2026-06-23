const mongoose = require("mongoose");

const hallSchema = new mongoose.Schema(
  {
    hallName: {
      type: String,
      required: true
    },

    description: String,

    price: Number,

    capacity: Number,

    image: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Hall",
  hallSchema
);