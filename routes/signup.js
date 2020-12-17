const c = require('../config');
const express = require('express');
const path = require('path');
const router = express.Router();
const {users} = require('../data');

router.get('/', async (req, res) => {
  res.render('signup', {cssOverrides: "signup.css"});
});

router.post('/', async (req, res) => {
  try {
	  const {username, pwd, cpwd} = req.body;
    if (!username || !pwd || !cpwd)
      throw Error(`required fields missing`);
    let user = await users.getUserByName(username);
    if (user)
      throw Error(`that user already exists, please select another`);
    if (username.length < 8 || username.length > 16)
      throw Error(`username length must be 8-16 characters long`);
    if (pwd.length < 8 || pwd.length > 16)
      throw Error(`password length must be 8-16 characters long`);
    if (pwd !== cpwd)
      throw Error(`password and confirmed password do not match`);
    if (!pwd.match(/[A-Z]/) || !pwd.match(/[a-z]/) || !pwd.match(/[0-9]/))
      throw Error(`password must have 1 upper, 1 lower, and 1 number minimum`);

    await users.createUser(username, pwd);
    res.render('login', {cssOverrides: "signup.css", username})
  }
  catch (e) {
    res.render('signup', {error: e.message,
                          cssOverrides: "signup.css"});
  }
});



module.exports = router;
