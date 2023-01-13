import * as THREE from "three";
import camera from "./camera.js";
import scene from "./scene.js";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setClearColor(0x000000, 1);
document.body.appendChild(renderer.domElement);


const animate = function () {
      renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();