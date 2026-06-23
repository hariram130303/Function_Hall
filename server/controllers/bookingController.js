const Booking = require("../models/Booking");
const sendMail = require("../utils/sendMail");

exports.createBooking = async (req, res) => {
  try {
    const booking = await Booking.create({
      ...req.body,
      user: req.user.id
    });

    await sendMail(
      "customer@gmail.com",
      "Booking Confirmed",
      "Your Function Hall Booking has been received."
    );

    res.status(201).json(booking);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find()
      .populate("user")
      .populate("hall");

    res.json(bookings);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};