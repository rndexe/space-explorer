import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Vector3, Quaternion, ArrowHelper } from "three";

export default class Spaceship {
    constructor(params) {
        this.params = params;
        this.scene = params.scene;
        this.input = params.inputs;
        this.decceleration = new Vector3(-0.0005, -0.0001, -5.0);
        this.acceleration = new Vector3(1.0, 1.0, 1.0);
        this.velocity = new Vector3(0, 0, 0);
        this.position = new Vector3();
        this.rotation = new Quaternion();

        this.init();
    }

    init() {
        this.loadModel();
    }

    loadModel() {
        const loader = new GLTFLoader();
        loader.load("/models/spaceship/scene.gltf", (model) => {
            model.scene.scale.setScalar(0.1);
            this.model = model.scene;
            this.scene.add(this.model);
            // this.addDebug();
        });
    }

    get Position() {
        return this.position;
    }

    get Rotation() {
        if (!this.model) {
            return new Quaternion();
        }
        return this.rotation;
    }

    update(time) {
        if (!this.model) {
            return;
        }
        time = time * 100;

        const velocity = this.velocity;
        const frameDecceleration = new Vector3(
            velocity.x * this.decceleration.x,
            velocity.y * this.decceleration.y,
            velocity.z * this.decceleration.z
        );
        frameDecceleration.multiplyScalar(time);

        velocity.add(frameDecceleration);
        // velocity.z = -Math.clamp(Math.abs(velocity.z), 50.0, 125.0);

        const acc = this.acceleration.clone();

        // console.log(time)
        const dummy = this.model;

        if (this.input.keys.shift) {
            acc.multiplyScalar(2.0);
        }
        if (this.input.keys.up) {
            dummy.translateY(time * acc.y);
        }
        if (this.input.keys.down) {
            dummy.translateY(-1 * time * acc.y);
        }
        if (this.input.keys.left) {
            dummy.rotateY(0.01 * acc.x);
        }
        if (this.input.keys.right) {
            dummy.rotateY(-0.01 * acc.x);
        }
        if (this.input.keys.space) {
            dummy.translateZ(time * acc.z);
        }

        this.position.copy(dummy.position);
        this.rotation.copy(dummy.quaternion);

        // console.log(this.model.quaternion);
    }

    // updateDebug() {
    //     this.model.getWorldDirection(this.dir);
    //     // console.log(this.dir)

    //     //  this.arrowHelper.position.set(this.position);
    //     this.arrowHelper.setDirection(this.dir);
    // }

    // addDebug() {
    //     this.model.getWorldDirection(this.dir);
    //     console.log(this.dir)
    //     this.arrowHelper = new ArrowHelper(this.dir, this.position, 1000, 0xffff00);
    //     this.model.add(this.arrowHelper);
    // }
}
