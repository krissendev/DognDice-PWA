//npm run dev
//fuser 3000/tcp
//kill <tasknumber>
//https://github.com/dataarts/dat.gui
//remember scripts in both http.createServer and in index.html
"use strict";
import express from "express";
import path from "path";
import { fileURLToPath } from 'node:url';
const __dirname = fileURLToPath(import.meta.url);



//debug
// import fs from 'fs';

const app =  express();

//ammo
express.static.mime.define({'application/wasm': ['wasm']});

const publicPath = path.join(__dirname, '..','..', 'public');


app.use(express.static(publicPath));
const port = process.env.PORT || 3001;

app.get("/", (req, res) => {
  //debug url files
  // fs.readdir(publicPath, (err, files) => {
  //     if (err) {
  //         console.log(err);
  //         return res.status(500).send('Unable to retrieve files');
  //     }
  //     res.send(files);
  // });
  
  res.type('html').send(html)
});

const server = app.listen(port, () => console.log(`Open app by clicking this: http://localhost:${port} `));


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
    <script src="lib/three/three.mjs" type="module"></script>

    <script src="lib/ammo/ammo.wasm.js"></script>


    <!--<script src="dog.mjs" type="module"></script>-->
    <!--<script src="dice3d.mjs" type="module"></script>-->

    <script src="/dog.mjs" type="module"></script>
    <script src="/dice3d.mjs" type="module"></script>

    <script src="/register-sw.mjs" type="module"></script>
    <script src="/sw.mjs" type="module"></script>

  </body>
</html>
`
