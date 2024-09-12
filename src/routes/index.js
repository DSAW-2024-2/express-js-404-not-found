<<<<<<< HEAD:src/routes/index.js
const { Router } = require("express");
const router = Router();

router.get("/user-info/:index", (request, response) => {
=======
const express = require("express");
const app = express();

app.use(express.json());

app.get("/user-info/:index", (request, response) => {
>>>>>>> 1e5a15fa0344af3a0a751626fee1bc8b42f4d8ab:index.js
  const index = request.params.index;
  const users = [
    {
      name: "Mauricio",
      lastName: "Suarez Barrera",
      email: "mauriciosuba@unisabana.edu.co",
      id: "0000300562",
    },
    {
      name: "Isabela",
      lastName: "Diaz Acosta",
      email: "isabeladiac@unisabana.edu.co",
      id: "0000310594",
    },
  ];
  try {
    const user = users[index - 1];
    response.send(user);
  } catch (error) {
    response.status(404);
    response.send({ message: "User not found" });
  }
});

<<<<<<< HEAD:src/routes/index.js
module.exports = router;
=======
>>>>>>> 1e5a15fa0344af3a0a751626fee1bc8b42f4d8ab:index.js
