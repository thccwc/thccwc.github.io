import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(window.innerWidth, window.innerHeight);

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);
camera.position.z = 0.01;

const controls = new OrbitControls(camera, canvas);
controls.enableZoom = false;
controls.enablePan = false;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;

const scene = new THREE.Scene();

// ✅ Use a known-working equirectangular image from Three.js
const loader = new THREE.TextureLoader();
loader.load(
  '360.PNG',
  (texture) => {
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    scene.background = texture;
    animate(); // only start after texture loads
  },
  undefined,
  (err) => {
    console.error('Texture load failed', err);
  }
);

function animate() {
  controls.update();
  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

const warningDiv = document.createElement('div');
warningDiv.textContent = 'Leave now while you can';
warningDiv.style.position = 'absolute';
warningDiv.style.top = '20px';
warningDiv.style.left = '50%';
warningDiv.style.transform = 'translateX(-50%)';
warningDiv.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
warningDiv.style.color = 'white';
warningDiv.style.padding = '1em 2em';
warningDiv.style.borderRadius = '8px';
warningDiv.style.fontSize = '1.2em';
warningDiv.style.zIndex = '1000';
document.body.appendChild(warningDiv);

setInterval(() => {
  warningDiv.textContent = 'Leave now while you can';
}, 1500);
