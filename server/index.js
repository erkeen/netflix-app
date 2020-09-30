const server = require("./src/server");

server.listen(process.env.PORT, () => {
  console.log("Server is Running", process.env.PORT);
});
