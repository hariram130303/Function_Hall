require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use(
  "/api/auth",
  require("./routes/authRoutes")
);

app.use(
  "/api/halls",
  require("./routes/hallRoutes")
);

app.use(
  "/api/bookings",
  require("./routes/bookingRoutes")
);

app.use(
  "/api/payment",
  require("./routes/paymentRoutes")
);

app.use(
  "/api/upload",
  require("./routes/uploadRoutes")
);

app.get("/", (req, res) => {
  res.send("Function Hall API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});