const express = require("express"),
      session = require("express-session"),
      ejs = require("ejs");

const port = 3000,
      users = {},
      memes = {}

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static("public"));
app.use(session({secret: "Shh, its a secret!"}));

class Meme {
  constructor(data) {
    this.userID = data.userID;
    this.step = data.step;
  }
}

class User {
  constructor(data) {
    this.sessionID = data.sessionID
    this.currentStep;
  }

  updateStep(step) {
    this.currentStep = step;

    if (!memes[this.sessionID]) {
      memes[this.sessionID] = new Meme({
        userID: this.sessionID,
        step: this.currentStep
      })
    } else {
      memes[this.sessionID].step = this.currentStep
    }
  }
}



app.get("/", (req, res) => {
  if (!users[req.session.id]) {
    users[req.session.id] = new User({
      sessionID: req.session.id
    })
  }

  res.render("index.ejs", {
    sessionID: req.session.id
  })
});

app.get("/meme-maker", (req, res) => {
  const step = req.query.s,
        sessionID = req.query.id;

  if (!sessionID || !step) {
    return res.redirect("/");
  }

  users[sessionID].updateStep(step);

  res.render("imageUpload.ejs", {
    sessionID: sessionID
  })
})

app.listen(port, () => console.log(`Listening to port: ${port}`));
