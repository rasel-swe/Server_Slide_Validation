const express = require("express");
const { body, validationResult } = require("express-validator");
const userRoutes = require("./routes/user.route");
const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
app.get("/", (req, res) => {
  res.status(200).send("Welcome");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use('/api',userRoutes)