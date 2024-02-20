const User = require("../models/user");

exports.postUser = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;

  User.create({
    name: name,
    email: email,
  })
    .then((user) => {
      console.log(user);
      return res.status(200).json({ user: user });
    })
    .catch((err) => console.log(err));
};

exports.getUsers = (req, res, next) => {
  User.findAll()
    .then((users) => {
      return res.status(200).json({ users: users });
    })
    .catch((err) => console.log(err));
};

exports.deleteUser = (req, res, next) => {
    const email = req.params.email;
    User.findOne({ where: { email: email } })
      .then((user) => {
        return user.destroy();
      })
      .catch((err) => console.log(err));
  };

  exports.editUser = (req,res,next) => {
    const name = req.body.name;
    const email = req.body.email;
    User.findByPk(email).then((user)=>{
        user.name = name;
        user.email = email;
        return product.save();
    }).catch((err) => console.log(err));
  }
  