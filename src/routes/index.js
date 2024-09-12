<<<<<<< HEAD:index.js
const express = require("express");
const app = express();
<<<<<<< HEAD:src/routes/index.js

const port = process.env.PORT || 3000;
=======
app.use(cors());
>>>>>>> parent of b31755b (Parte de Mao):index.js
app.use(express.json());

app.get("/user-info/:index", (request, response) => {
=======
const { Router } = require("express");
const router = Router();

router.get("/user-info/:index", (request, response) => {
>>>>>>> 0337444265dbfce6aac89ace1716ebcfa64f8a43:src/routes/index.js
  const index = request.params.index;
  const users = [
    {
      name: "Isabela",
      lastName: "Diaz Acosta",
      email: "isabeladiac@unisabana.edu.co",
      id: "0000310594",
    },
  ];
<<<<<<< HEAD:src/routes/index.js

  try {
    const user = users[index - 1];
    response.send(user);
  } catch (error) {
    response.status(404);
    response.send({ message: "User not found" });
  }
=======
>>>>>>> parent of b31755b (Parte de Mao):index.js
});
<<<<<<< HEAD:index.js
app.set("port", port);
app.listen(port, () => {
  console.log("Server is running");
});
=======

module.exports = router;
>>>>>>> 0337444265dbfce6aac89ace1716ebcfa64f8a43:src/routes/index.js
