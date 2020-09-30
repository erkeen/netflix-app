const express = require("express");

const server = express();

server.use(express.json());
server.use(require("cors")());

server.use("/movies", require("./routes/movies"));

module.exports = server;
