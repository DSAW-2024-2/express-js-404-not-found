const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

app.get("/user-info/:index", (request, response) => {
  const index = request.params.index;
  const users = [
    {
      name: "Isabela",
      lastName: "Diaz Acosta",
      email: "isabeladiac@unisabana.edu.co",
      id: "0000310594",
    },
  ];
});
app.set("port", 3000);
app.listen("3000", () => {
  console.log("Server is running");
});
