import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

function main() {
	const canvas = document.querySelector('#c');
	const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });

	const fov = 75;
	const aspect = 2;
	const near = 0.1;
	const far = 100;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 3;

	const controls = new OrbitControls(camera, canvas);
	controls.target.set(0, 0, 0);
	controls.update();

	const scene = new THREE.Scene();

	// Light
	{
		const color = 0xFFFFFF;
		const intensity = 3;
		const light = new THREE.DirectionalLight(color, intensity);
		light.position.set(-1, 2, 4);
		scene.add(light);
	}

	// Background
	{
		const loader = new THREE.TextureLoader();
		const texture = loader.load('360.png', () => {
			texture.mapping = THREE.EquirectangularReflectionMapping;
			texture.colorSpace = THREE.SRGBColorSpace;
			scene.background = texture;
		});
	}
}
main();
	