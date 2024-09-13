import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();

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

  try {
    const user = users[index - 1];
    response.send(user);
  } catch (error) {
    response.status(404);
    response.send({ message: "User not found" });
  }
});

api.use("/api/", router);

export const handler = serverless(api);
