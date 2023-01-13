import * as THREE from 'three';

const textureLoader = new THREE.TextureLoader();

const sphereGeometry = new THREE.SphereGeometry(5, 64, 64);
const sphereMaterial = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 1,
    normalMap: textureLoader.load('../assets/textures/NormalMap1.jpg'),
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

export default sphere;
