<img alt="A dog flying in space" width="100%" height="100%" src="https://github.com/krissendev/DognDice-PWA/blob/main/banner.png">

<h1 align="center">DognDice - PWA</h1> 

## Overview
A rotating dice in the works of becomming a dice rolling game with dog pictures.
Project uses:
* [Express.js](https://github.com/expressjs/express/tree/master)
* Service workers
* [Dog-api](https://dog.ceo/api) for dog pictures. The api call currently works but the code has been disabled for the PWA service offline worker functionality. Currently using local image as placeholder until both features work seemlessly together.
* [Three.js](https://github.com/mrdoob/three.js/tree/dev) for 3D display and animation.
* [Datgui](https://github.com/dataarts/dat.gui) for 3D development assistance

The project is set up as a progressive web app (PWA) for offline use through cookies.
## Prerequisite
* [Node.js](https://nodejs.org/)

## Installation in terminal
```bash
git clone --depth=1 https://github.com/krissendev/DognDice
cd DognDice
npm install
```

## Run Program
```bash
npm run dev
```
While "npm run dev" is running click link/url in terminal to open the app.
Most likely this is http://localhost:3001.

## Close Program
While port is running in the termial hover mouse over terminal and press >Ctrl + C> to terminate process.

Note:
It is also worth noting that the program uses Service Workers. 
<br> 
This means the program will still be running after program termination since it is stored in browser cache. 
<br>
<br>
Option 1: 
<br>
Right Mouse Click Inspect Element.
Navigate on the top left bar to "Application"/ "Service Workers"
Press "Unregister".
<br>
It should no longer be stored 
<br>
<br>
or 
<br>
<br>
Option 2:
<br>
Simply clear your browser cache.
<br>
It should no longer be stored 


## Futher Expansion of the Project
The Dog API works but the code has been disabled for checking out the PWA offline feature. 
<br>
Will in the feature re-enable the fetch api and combine both approaches.
<br>
This will eventually be turned into some sort of dice rolling game. Already looking into [Ammo.js](https://github.com/kripken/ammo.js/) for dice rolling physics.
