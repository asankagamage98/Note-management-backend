require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { dbConnect } = require("./src/utils/dbConnection");
const bodyParser = require("body-parser");
dbConnect();

const noteRouter = require("./src/routes/note.router");

app = express();



app.use(cors());

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(" Unwir  Assessment Service");
});

app.use("/api/note", noteRouter);


const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.info(`Backend running on http://localhost:${PORT}`);
});


