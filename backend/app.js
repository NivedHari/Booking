const express = require('express');
const cors = require('cors');

const sequelize = require("./utils/database");

const UserController = require("./controllers/user");

var app = express();

const PORT = 8000;
app.use(cors());

app.use(express.json());

app.get("/api/users", UserController.getUsers);
app.post("/api/users", UserController.postUser);
app.delete("/api/users/:email", UserController.deleteUser);
app.put("/api/users/:email",UserController.editUser);

sequelize
  .sync()
  .then((result) => {
    app.listen(PORT, function () {
      console.log("Started application on port %d", PORT);
    });
  })
  .catch((err) => console.log(err));
