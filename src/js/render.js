import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import camera from "./camera.js";
import scene from "./scene.js";

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

const animate = function () {
      renderer.render(scene, camera);
    requestAnimationFrame(animate);
}

animate();
