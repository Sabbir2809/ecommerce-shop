// Package Dependencies
const express = require("express");
// const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const rateLimit = require("express-rate-limit");
const cookieParser = require("cookie-parser");
require("dotenv").config();
// import router file
const router = require("./src/routes/api");

// express app
const app = express();

// Security Middleware:
app.use(cors());
app.use(helmet());
app.use(hpp());
app.use(mongoSanitize());
const limiter = rateLimit({ windowMs: 1 * 60 * 1000, max: 100 });
app.use(limiter);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(express.static("frontend/dist"));

// router:
app.use("/api/v1", router);

// Frontend Tagging:
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
// });

// Exports app
module.exports = app;
