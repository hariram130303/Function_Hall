const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    hall: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hall"
    },

    eventDate: Date,

    guests: Number,

    status: {
      type: String,
      enum: [
        "Pending",
        "Approved",
        "Rejected"
      ],
      default: "Pending"
    },

    paymentStatus: {
      type: String,
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "Booking",
  bookingSchema
);