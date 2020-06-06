const bcrypt = require("bcrypt");

module.exports = {
  login: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { username, password } = req.body;
      const outcome = await db.get_user(username);
      const user = outcome[0];

      if (!user) {
        return res.status(404).send("User does not exist");
      }

      const authenticated = bcrypt.compareSync(password, user.password);
      if (!authenticated) {
        return res.status(403).send("Incorrect email or password");
      }

      delete user.hash;
      req.session.user = user;
      res.status(200).send(req.session.user);
    } catch (e) {
      res.send(e);
    }
  },

  register: async (req, res) => {
    const db = req.app.get("db");
    const { username, password, profile_pic } = req.body;
    const outcome = await db.get_user(username);
    if (outcome[0]) {
      return res.status(409).send("User already exists");
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const user = await db.register_user([username, hash, profile_pic]);
    delete user[0].hash;
    req.session.user = {
      userId: user[0].user_id,
      username: user[0].username,
      img: user[0].profile_pic
    }
    res.status(200).send(req.session.user);
  },

  getUser: (req, res) => {
    if (req.session.user) {
      return res.status(200).send(req.session.user);
    } else {
      res.sendStatus(404);
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.sendStatus(200);
  },
};
