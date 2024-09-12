const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.use(require("./routes/index.js"));

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), () => {
  console.log("Server is running");
});
