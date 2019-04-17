const express = require("express"),
      session = require("express-session"),
      ejs = require("ejs"),
      multer  = require("multer"),
      path = require("path"),
      fs = require("fs");

// ===== Multer ===== //
const storage = multer.diskStorage({
  destination: "./tempImgStorage",
  filename: (req, file, callback) => callback(null, `${file.fieldname}-${req.session.id}${path.extname(file.originalname)}`)
})

const upload = multer({storage: storage})

const port = 3000,
      users = {},
      memes = {}

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static("public"));
app.use(express.static('tempImgStorage'));
app.use(session({secret: "Shh, its a secret!"}));

class Meme {
  constructor(data) {
    this.userID = data.userID;
    this.step = data.step;
    this.imgName;
  }

  remove() {
    fs.unlink(`tempImgStorage/${this.imgName}`, (err) => {
      if (err) throw err;
    });
  }
}

app.get("/", (req, res) => {
  if (memes[req.session.id]) {
    memes[req.session.id].remove()
  }

  res.render("index.ejs", {
    sessionID: req.session.id
  })
});

app.get("/meme-maker", (req, res) => {
  const step = parseInt(req.query.s),
        sessionID = req.query.id;

  if (!sessionID || !step) return res.redirect("/");

  switch (step) {
    case 1:
      memes[sessionID] = new Meme({
        userID: sessionID,
        step: step
      })

      res.render("imageUpload.ejs", {sessionID: sessionID})
      break;

    case 2:
      res.render("textAdd.ejs", {sessionID: sessionID})
      break;
  }
})

app.post('/uploadIMG', upload.single("meme"), (req, res) => {
  const sessionID = req.body.sessionID,
        fileName = req.file.filename;

  memes[sessionID].imgName = fileName;

  res.redirect(`/meme-maker?s=2&id=${sessionID}`)
})

app.listen(port, () => console.log(`Listening to port: ${port}`));
