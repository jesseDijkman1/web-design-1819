"use strict";
// (() => {
const canvas = document.getElementById("meme-canvas");
// const ctx = canvas.getContext("2d");

const topTxtInput = document.getElementById("top-txt");
const bottomTxtInput = document.getElementById("bottom-txt");

const topTxtSizeInput = document.getElementById("top-txt-size");
const bottomTxtSizeInput = document.getElementById("bottom-txt-size");

const autoTxtPosInput = document.getElementById("auto-position");
const topTxtPosInput = document.getElementById("top-txt-position");
const bottomTxtPosInput = document.getElementById("bottom-txt-position");

class Meme {
  constructor(c) {
    this.cWidth;
    this.cHeight;
    this.canvas = c;
    this.ctx = c.getContext("2d");
    this.img;
    this.contentTop = "Hello \n World";
    this.contentBottom = "";
    this.topSize = 16;
    this.bottomSize = 16;
    this.color;
    this.topPos;
    this.bottomPos;
    this.topTxt.bind(this)
    this.bottomTxt.bind(this)
    this.topTxtSize.bind(this)
    this.bottomTxtSize.bind(this)

    this.createImage().then(this.update.bind(this))
  }

  createImage() {
    return new Promise((resolve, reject) => {
      this.img = new Image()
      this.img.src = this.canvas.dataset.img;

      this.img.onload = e => {
        this.cWidth = e.target.width;
        this.cHeight = e.target.height;
        this.topPos = this.cHeight / 20;
        this.bottomPos = this.cHeight - this.cHeight / 20;

        this.canvas.setAttribute("width", this.cWidth);
        this.canvas.setAttribute("height", this.cHeight);

        resolve()
      }
    })
  }

  update() {
    this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);

    // Step 1: Draw the background
    this.ctx.drawImage(this.img, 0, 0);

    // Step 2: Set the color of the text
    this.ctx.fillStyle = this.color || "white";

    // Step 3: Set the size of the top text and draw the text
    this.ctx.font = `${this.topSize}px Comic Sans MS`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "top";
    this.ctx.fillText(this.contentTop, this.cWidth / 2, this.topPos);

    // Step 4: Set the size of the bottom text and draw the text
    this.ctx.font = `${this.bottomSize}px Comic Sans MS`;
    this.ctx.textAlign = "center";
    this.ctx.textBaseline = "alphabetic";
    this.ctx.fillText(this.contentBottom, this.cWidth / 2, this.bottomPos);
  }

  topTxt(e) {
    this.contentTop = e.target.value;
    this.update()
  }

  bottomTxt(e) {
    this.contentBottom = e.target.value;
    this.update()
  }

  topTxtSize(e) {
    this.topSize = parseInt(e.target.value);
    this.update()
  }

  bottomTxtSize(e) {
    this.bottomSize = parseInt(e.target.value);
    this.update()
  }

  topTxtPos(e) {
    this.topPos = parseInt(e.target.value)
    this.update()
  }

  bottomTxtPos(e) {
    this.bottomPos = this.cHeight - parseInt(e.target.value)
    this.update()
  }

  autoTxtPos(e) {
    if (e.target.checked) {
      this.topPos = this.cHeight / 20;
      this.bottomPos = this.cHeight - this.cHeight / 20;
    }

    this.update()
  }
}

const meme = new Meme(canvas);

topTxtInput.addEventListener("keydown", e => {
  setTimeout(() => meme.topTxt(e), 0)
});

bottomTxtInput.addEventListener("keydown", e => {
  setTimeout(() => meme.bottomTxt(e), 0)
});

topTxtSizeInput.addEventListener("keydown", e => {
  setTimeout(() => meme.topTxtSize(e), 0)
});

bottomTxtSizeInput.addEventListener("keydown", e => {
  setTimeout(() => meme.bottomTxtSize(e), 0)
});

topTxtPosInput.addEventListener("keydown", e => {
  setTimeout(() => meme.topTxtPos(e), 0)
})

bottomTxtPosInput.addEventListener("keydown", e => {
  setTimeout(() => meme.bottomTxtPos(e), 0)
})

autoTxtPosInput.addEventListener("change", e => {
  setTimeout(() => meme.autoTxtPos(e), 0)
})

// let img;
// let imgSrc;
//
// let cWidth;
// let cHeight;
//
// for (let i = 0; i < memeTxtInputs.length; i++) {
//   memeTxtInputs[i].addEventListener("focus", liveTyper)
// }

// imgSrc = canvas.dataset.img;
// img = new Image()
// img.src = imgSrc;
// img.onload = e => {
//   cWidth = e.target.width;
//   cHeight = e.target.height;
//
//   canvas.setAttribute("width", cWidth)
//   canvas.setAttribute("height", cHeight)
//
//   drawImage()
// }

//
// function drawImage() {
//   ctx.drawImage(img, 0, 0);
// }
//
// function liveTyper(e) {
//   e.target.addEventListener("keydown", updateMemeText)
// }
//
// function updateMemeText() {
//   setTimeout(() => {
//     drawImage()
//
//     ctx.font = "30px system-ui";
//
//     for (let i = 0; i < memeTxtInputs.length; i++) {
//       let topTxt = "";
//       let bottomTxt = "";
//
//       if (memeTxtInputs[i].classList.contains("top")) {
//         topTxt = memeTxtInputs[i].value;
//       }
//
//       if (memeTxtInputs[i].classList.contains("bottom")) {
//         bottomTxt = memeTxtInputs[i].value;
//       }
//       ctx.fillText(topTxt, 10, 50);
//       ctx.fillText(bottomTxt, 10, cHeight - 50);
//     }
//   }, 0)
// }
// })()
