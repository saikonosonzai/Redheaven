/*jshint esversion: 6 */
/*jshint esversion: 8 */


import * as THREE from "https://cdn.skypack.dev/three@0.129.0/build/three.module.js";
import {OrbitControls} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/controls/OrbitControls.js";
import {GLTFLoader} from "https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//setzt die Kamera Position
camera.position.x = 300;

let marsObject;
let marsExtraObject;

//Zum Bewegen
let controls;

//Welches Model dargestellt werden soll
let objToRender = 'mars';
let objToRender_extra = 'mars_extra';

//Ein Loader für GLFT Files
const loader = new GLTFLoader();

//Datei laden
loader.load(
    `../../resources/models/${objToRender}/scene.gltf`,
    function (gltf) {
        //If the file is loaded, add it to the scene
        marsObject = gltf.scene;
        scene.add(marsObject);
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

loader.load(
    `../../resources/models/${objToRender_extra}/scene.gltf`,
    function (gltf) {
        //If the file is loaded, add it to the scene
        marsExtraObject = gltf.scene;
        scene.add(marsExtraObject);
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


//Added Lichter zu der Scene
const topLight = new THREE.DirectionalLight(0xffffff, 1); // (color, intensity)
topLight.position.set(500, 500, 500); //top-left-ish
topLight.castShadow = true;
scene.add(topLight);

const ambientLight = new THREE.AmbientLight(0x333333, objToRender === "mars" ? 5 : 1);
scene.add(ambientLight);

//zum Bewegen des Objektes
controls = new OrbitControls(camera, renderer.domElement);

//Rendern
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

// Raycaster und Maus-Position
const raycaster = new THREE.Raycaster();

document.addEventListener('mousedown', onMouseDown);

function onMouseDown(event) {
    // Maus-Koordinaten in Normalized Device Coordinates (NDC) umwandeln
    const coords = new THREE.Vector2(
        (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
        -(event.clientY / renderer.domElement.clientHeight) * 2 + 1 // Y invertieren
    );

    // Raycaster mit Kamera und Mausposition setzen
    raycaster.setFromCamera(coords, camera);

    // Kollisionsprüfung mit marsObject
    const intersects = raycaster.intersectObject(marsObject, true);
    if (intersects.length > 0) {
        window.location.href = "wohnungen/wohnung.html"; // Link zur gewünschten Seite
    }
}

//Listener damit der Renderer mit zoomt
window.addEventListener("resize", function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

controls.enableRotate = true;
controls.enableZoom = false;
controls.enablePan = false;

//startet das rendering
animate();