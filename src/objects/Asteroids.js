import { InstancedMesh, MathUtils, MeshStandardMaterial, Object3D } from "three";
import { GLTFLoader } from "three/examples/jsm/Addons.js";

export default class Asteroids {
    constructor(params) {
        this.params = params;
        this.meshes = [];
        this.init();
    }

    init() {
        this.material = new MeshStandardMaterial();
        this.loadModel();
    }

    loadModel() {
        const loader = new GLTFLoader();
        loader.load("/models/asteroids/asteroids_pack_rocky_version.glb", (gltf) => {
            gltf.scene.traverse((child) => {
                if (child.isMesh) this.createAsteroids(child);
            });
        });
    }

    createAsteroids(model) {
        const mesh = new InstancedMesh(model.geometry, this.material, this.params.count);

        this.meshes.push(mesh);

        const dummy = new Object3D();
        for (let i = 0; i < this.params.count; i++) {
            dummy.position.x = MathUtils.randFloatSpread(10000.0);
            dummy.position.y = MathUtils.randFloatSpread(10000.0);
            dummy.position.z = MathUtils.randFloatSpread(10000.0);

            dummy.scale.setScalar(MathUtils.randFloat(0.1, 20.0));
            dummy.updateMatrix();
            mesh.setMatrixAt(i, dummy.matrix);
        }
        this.params.scene.add(mesh);
    }

    update() {}
}
