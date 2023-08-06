//npm run dev
//fuser 3000/tcp
//kill <tasknumber>
//https://github.com/dataarts/dat.gui
//remember scripts in both http.createServer and in index.html
"use strict";

const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000;
console.log("step 0");
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    readResource(res,'/index.html','text/html' );
  }
  else if(req.url === '/index.html'){
    readResource(res,'/index.html','text/html' );
  }
  else if(req.url === '/index.js'){
    readResource(res,'/index.js','text/javascript' );
  }
  //library 
  else if(req.url === '/lib/three/three.js'){
    readResource(res,'/lib/three/three.js','text/javascript' );
  }
  // else if(req.url === '/lib/datgui/build/dat.gui.js'){
  //   readResource(res,'/lib/datgui/build/dat.gui.js','text/javascript' );
  // } 
  //functionality
  else if (req.url === '/dog.js') {
    readResource(res,'/dog.js','text/javascript');
  }
  else if (req.url === '/dice3d.js') {
    readResource(res,'/dice3d.js','text/javascript' );
  }
  else if (req.url === '/tempshader.js') {
    readResource(res,'/tempshader.js','text/javascript' );
  }
  else if (req.url === '/register-sw.js') {
    readResource(res,'/register-sw.js','text/javascript' );
  }
  else if (req.url === '/sw.js') {
    readResource(res,'/sw.js','text/javascript' );
  }
  else if (req.url === '/img/testimg.jpg') {
    readResource(res,'/img/testimg.jpg','image/jpg' );
  }
  else if (req.url === '/img/icon.jpg') {
    readResource(res,'/img/icon.jpg','image/jpg' );
  }
  else if (req.url === '/img/favicon.ico') {
    readResource(res,'/img/favicon.ico','image/x-icon' );
  }
  else if (req.url ==='/manifest.json'){
    readResource(res,'/manifest.json', 'application/manifest+json')
  }
  else {
    res.writeHead(404 );
    res.end('Not found');
  }
});

function readResource(res, sourcepath, type){
  const file = path.join(__dirname, sourcepath);
  fs.readFile(file, (err, content) => {
    if (err) {
      res.writeHead(500);
      res.end(`Error loading preload.js: ${err}`);
    } else {
      res.writeHead(200, { 'Content-Type': type });
      res.end(content);
    }
  });
}

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

