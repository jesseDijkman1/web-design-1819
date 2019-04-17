const express = require("express"),
      session = require("express-session"),
      ejs = require("ejs");

const port = 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static("public"));
app.use(session({secret: "Shh, its a secret!"}));

app.get("/", (req, res) => {
  const data = {
    sessionID: req.session.id
  }

  res.render("index.ejs", data)
});

app.listen(port, () => console.log(`Listening to port: ${port}`));
