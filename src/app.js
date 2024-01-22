//npm run dev
//fuser 3000/tcp
//kill <tasknumber>
//https://github.com/dataarts/dat.gui
//remember scripts in both http.createServer and in index.html
"use strict";

const express = require("express");
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname,'..' ,'public')));
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

const server = app.listen(port, () => console.log(`Open app by clicking this: http://localhost:${port} `));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Dog n Dice</title>
    <!-- <link rel="stylesheet" href="stylesheet.css"/>		 -->
    <link rel="manifest" href="/manifest.json">
    <link rel="icon" type="image/x-icon" href="/public/img/favicon.ico">
  </head>
  <body>
    <h1>Dog n Dice</h1>
    <section>
      Hello from Render!
    </section>
    <script src="lib/three/three.js"></script>
    <script src="dog.js" type="module"></script>
    <script src="dice3d.js" type="module"></script>
    <script src="register-sw.js" type="module"></script>
    <script src="sw.js" type="module"></script>
  </body>
</html>
`
