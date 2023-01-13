import * as THREE from 'three';

const sphereGeometry = new THREE.SphereGeometry(5, 64, 64);
const sphereMaterial = new THREE.MeshStandardMaterial({
    color: 0x156289,
});
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

const mesh={
    sphere,
}
export default mesh;
