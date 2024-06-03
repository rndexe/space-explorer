import { WebGLRenderer, Scene, PCFSoftShadowMap, PerspectiveCamera } from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { setupLights, loadBackground, addHelpers, addFog } from "./sceneSetup";
import Spaceship from "./objects/Spaceship";
import ThirdPersonCamera from "./objects/ThirdPersonCamera";
import Inputs from "./inputs";
import Asteroids from "./objects/Asteroids";

export default class Game {
    constructor(stats) {
        this.stats = stats;
        this.oldTime = null;
        this.init();
    }

    init() {
        this.scene = this.createScene();
        this.renderer = this.createRenderer();
        this.camera = this.createCamera();
        this.inputs = new Inputs();
        this.sceneSubjects = this.createSceneSubjects(this.scene);
        this.addOrbitControls();
    }

    createScene() {
        const scene = new Scene();
        loadBackground(scene);
        setupLights(scene);
        // addHelpers(scene);
        // addFog(scene);

        return scene;
    }

    createSceneSubjects(scene) {
        const ship = new Spaceship({ scene, inputs: this.inputs });

        const sceneSubjects = [
            ship,
            new ThirdPersonCamera({ camera: this.camera, target: ship }),
            new Asteroids({ scene, count: 100 }),
        ];

        return sceneSubjects;
    }

    createCamera() {
        const fov = 60;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 1.0;
        const far = 10000.0;
        const camera = new PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(100, 100, 0);

        return camera;
    }

    createRenderer() {
        // Renderer setup
        const renderer = new WebGLRenderer();
        // renderer.shadowMap.enabled = true;
        // renderer.shadowMap.type = PCFSoftShadowMap;
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(renderer.domElement);

        return renderer;
    }

    addOrbitControls() {
        const controls = new OrbitControls(this.camera, this.renderer.domElement);
        controls.target.set(0, 20, 0);
        controls.update();
    }

    update(time) {
        //console.log(elapsedTime)
        const timeS = time * 0.001;
        for (let i = 0; i < this.sceneSubjects.length; i++) this.sceneSubjects[i].update(timeS);
    }

    onResize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    onKeyUp(e) {
        this.inputs.onKeyUp(e);
    }

    onKeyDown(e) {
        this.inputs.onKeyDown(e);
    }

    animate() {
        requestAnimationFrame((t) => {
            if (this.oldTime === null) {
                this.oldTime = t;
            } else {
                this.update(t - this.oldTime);
                this.stats.update();

                this.renderer.render(this.scene, this.camera);
                this.oldTime = t;
            }

            this.animate();
        });
    }
}
