import * as THREE from 'three';
import mesh from './mesh.js';
import camera from './camera.js';
import light from './light.js';

const scene = new THREE.Scene();
scene.add(camera);
scene.add(light);

const items=Object.keys(mesh);
for (let i = 0; i < items.length; i++) {
    scene.add(mesh[items[i]]);
}

export default scene;