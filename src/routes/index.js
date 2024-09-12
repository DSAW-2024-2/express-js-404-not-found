const { Router } = require("express");
const router = Router();

router.get("/user-info/:index", (request, response) => {
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

module.exports = router;
