import * as THREE from 'three';

const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

camera.position.set(2, 0.5, 3);

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const boxMaterial = new THREE.MeshBasicMaterial({color: "red"});
const box = new THREE.Mesh(boxGeometry, boxMaterial);

scene.add(box);

renderer.render(scene, camera);