// Dependencies
const express = require("express");
// const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
require("dotenv").config();
const morgan = require("morgan");
// import router file
const router = require("./src/routes/api");

// express app
const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());
const limiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 30 });
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static("frontend/dist"));
app.use(morgan("dev"));

// Health Check
app.get("/", (req, res) => {
  res.status(200).send("E-commerce Shop: API, All is Well");
});

// Routes
app.use("/api/v1", router);

// Front-End Tagging
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// });

// Exports app
module.exports = app;
