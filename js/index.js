// import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "./three.module.js";
// import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls";
// import * as OrbitControls from "../node_modules/three/examples/jsm/controls/OrbitControls.js";

// const orbitControls = require("../node_modules/three/examples/jsm/controls/OrbitControls.js")

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 
    60, window.innerWidth / window.innerHeight, 0.2, 100 );

camera.position.x = -1;
camera.position.y = 1;
camera.position.z = 10;

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x1155ff } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const othergeometry = new THREE.SphereGeometry(2,8,8);
const othermaterial = new THREE.MeshBasicMaterial( { color: 0x33baff } );
const sphere = new THREE.Mesh(othergeometry,othermaterial);
scene.add(sphere);
sphere.position.z = -5;

const floorgeometry = new THREE.BoxGeometry(20,1,20);
const floormaterial = new THREE.MeshBasicMaterial({color: 0x656587});
const floor = new THREE.Mesh(floorgeometry,floormaterial);
scene.add(floor);
floor.position.y = -3;
floor.position.z = -5;
floor.receiveShadow = true;

// const loader = new THREE.GLTFLoader();
// loader.load("../assets/pulley.gltf", (gltf) => {
//     scene.add(gltf.scene);
// } )


// const spotLight = new THREE.SpotLight(0xffffff );
// spotLight.position.set( 10, 100, -30 );
// spotLight.castShadow = true;
// scene.add(spotLight);

// spotLight.shadow.mapSize.width = 1024;
// spotLight.shadow.mapSize.height = 1024;

// spotLight.shadow.camera.near = 500;
// spotLight.shadow.camera.far = 4000;
// spotLight.shadow.camera.fov = 30;

// scene.add( spotLight );

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

const renderer = new THREE.WebGLRenderer();
console.log(scene);
console.log(camera);
console.log(renderer);

function animate() {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();


const canvas = document.getElementById("scene");
// console.log(canvas);
renderer.render(scene,camera);
renderer.setSize( canvas.clientWidth , canvas.clientHeight -50);
canvas.appendChild(renderer.domElement)

// orbitControls.OrbitControls(camera,renderer.domElement)
// const controls = new THREE.OrbitControls(camera,renderer.domElement);