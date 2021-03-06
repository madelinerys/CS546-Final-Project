const c = require("../config");
const express = require("express");
const path = require("path");
const router = express.Router();
const { bets } = require("../data");
const { users } = require("../data");
const { lines } = require("../data");
const xss = require('xss');

router.use((req, res, next) => {
  if (!req.session.AuthCookie)
    res.redirect('/');
  else
    next();
});

router.get("/", async (req, res) => {
  try {
    let user = req.session.user
          let username = user.username;
          let requesteduser = await users.getUserByName(username);
        let amountBal = requesteduser.balance;
        let name = requesteduser.username;
        res.render("fund", {title: "Fund Account", Balance:amountBal,Name:name});
  } catch (e) {
    res.status(400).send(`route: / ${e}`);
  }
});

router.post("/", async (req, res) => {
        try {
           let user = req.session.user
        let username = user.username;
           let Balance = await users.updateBalance(username,xss(req.body.funamot));
           let allLines = await lines.get();
        res.render('bet', {
            allLines: allLines,
            cssOverrides: "bet.css"
        });
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    });

module.exports = router;
