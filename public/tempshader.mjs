"use strict";

let vertexShader = `
  void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }
`;

let fragmentShader = `
  void main() {
    gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
  }
`;

let material = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader
});

let geometry = new THREE.BoxGeometry(1, 1, 1);
let cube = new THREE.Mesh(geometry, material);

scene.add(cube);
