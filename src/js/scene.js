import * as THREE from 'three';
import sphere from './sphere.js';
import camera from './camera.js';
import light from './light.js';

const scene = new THREE.Scene();
scene.add(camera);
scene.add(sphere);
scene.add(light);

export default scene;