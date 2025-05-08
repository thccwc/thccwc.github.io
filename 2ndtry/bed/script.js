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
		const texture = loader.load('360.PNG', () => {
			texture.mapping = THREE.EquirectangularReflectionMapping;
			texture.colorSpace = THREE.SRGBColorSpace;
			scene.background = texture;
		});
	}

	// Load Demon Model
	let demon;
	{
		const loader = new GLTFLoader();
		loader.load('backrooms_entity_38_needlelimbs.glb', (gltf) => {
			demon = gltf.scene;
			demon.scale.set(1, 1, 1); // Adjust as needed
			scene.add(demon);
		});
	}

	function resizeRendererToDisplaySize(renderer) {
		const canvas = renderer.domElement;
		const width = canvas.clientWidth;
		const height = canvas.clientHeight;
		const needResize = canvas.width !== width || canvas.height !== height;
		if (needResize) {
			renderer.setSize(width, height, false);
		}
		return needResize;
	}

	function render(time) {
		time *= 0.001;

		if (resizeRendererToDisplaySize(renderer)) {
			const canvas = renderer.domElement;
			camera.aspect = canvas.clientWidth / canvas.clientHeight;
			camera.updateProjectionMatrix();
		}

		if (demon) {
			demon.rotation.y = time * 0.5; // Optional: spin the demon
		}

		renderer.render(scene, camera);
		requestAnimationFrame(render);
	}

	requestAnimationFrame(render);
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


main();