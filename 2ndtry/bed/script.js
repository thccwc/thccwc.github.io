import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function main() {
	const canvas = document.querySelector('#c');
	const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
	renderer.setSize(window.innerWidth, window.innerHeight);

	const fov = 75;
	const aspect = window.innerWidth / window.innerHeight;
	const near = 0.1;
	const far = 100;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 3;

	const controls = new OrbitControls(camera, canvas);
	controls.target.set(0, 0, 0);
	controls.update();

	const scene = new THREE.Scene();

	// Light (optional, safe to keep even if no objects)
	const light = new THREE.DirectionalLight(0xFFFFFF, 3);
	light.position.set(-1, 2, 4);
	scene.add(light);

	// Background
	const loader = new THREE.TextureLoader();
	loader.load('360.png', (texture) => {
		texture.mapping = THREE.EquirectangularReflectionMapping;
		texture.colorSpace = THREE.SRGBColorSpace;
		scene.background = texture;

		// Only render once background is ready
		renderer.render(scene, camera);
	});
}

main();
