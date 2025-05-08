import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function main() {
  const canvas = document.querySelector('#c');
  const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.z = 5;

  const controls = new OrbitControls(camera, canvas);
  controls.update();

  const scene = new THREE.Scene();

  const light = new THREE.DirectionalLight(0xffffff, 3);
  light.position.set(-1, 2, 4);
  scene.add(light);

  let demon;
  const loader = new GLTFLoader();
  loader.load(
    'backrooms_entity_38_needlelimbs.glb',
    (gltf) => {
      demon = gltf.scene;
      demon.scale.set(1, 1, 1);
      scene.add(demon);
    },
    undefined,
    (err) => console.error('Failed to load model:', err)
  );

  function animate(time) {
    time *= 0.001;

    if (demon) {
      demon.rotation.y = time * 0.5;
    }

    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }

  animate();
}

main();

