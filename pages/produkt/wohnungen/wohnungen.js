import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import {OrbitControls} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import {GLTFLoader} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//Kamera Position
camera.position.x = 300;

let object;

//Zum Bewegen
let controls;


//Welches Model dargestellt werden soll
let objToRender = 'wohnung1';

//Ein Loader für GLFT Files
const loader = new GLTFLoader();

//Datei laden
loader.load(
    `../../../resources/models/produkte/${objToRender}/scene.gltf`,
    function (gltf) {
        //If the file is loaded, add it to the scene
        object = gltf.scene;
        scene.add(object);
    },
    function (xhr) {
        //While it is loading, log the progress
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        //If there is an error, log it
        console.error(error);
    }
);

//Neuen Renderer instanzieren
const renderer = new THREE.WebGLRenderer({alpha: true}); //Alpha: true allows for the transparent background
renderer.setSize(window.innerWidth, window.innerHeight);

//Adde den Renderer
document.getElementById("container3D").appendChild(renderer.domElement);

//Set how far the camera will be from the 3D model


//Added Lichter zu der Scene
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500) //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "wohnung1" ? 5 : 1);
scene.add(ambientLight);

//zum Bewegen und zoomen des Objektes
controls = new OrbitControls(camera, renderer.domElement);

//Rendern
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

//Listener damit der Renderer mit zoomt
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

controls.enableRotate = true;
controls.enableZoom = true;
controls.enablePan = false;


//startet das rendering
animate();


