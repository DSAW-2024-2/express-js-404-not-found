const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use(require("./Routes/index.js"));

let port = process.env.PORT || 3000;
app.set("port", port);
app.listen(app.get("port"), () => {
  console.log(`server is running on port ${port}`);
});
