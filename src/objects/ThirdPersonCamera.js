import { Vector3 } from "three";

export default class ThirdPersonCamera {
    constructor(params) {
        this.params = params;
        this.camera = params.camera;

        this.currentPosition = new Vector3();
        this.currentLookat = new Vector3();
    }

    calculateIdealOffset() {
        const idealOffset = new Vector3(0, 55, -75);
        idealOffset.applyQuaternion(this.params.target.Rotation);
        idealOffset.add(this.params.target.Position);
        return idealOffset;
    }

    calculateIdealLookat() {
        const idealLookat = new Vector3(0, 30, 2);
        idealLookat.applyQuaternion(this.params.target.Rotation);
        idealLookat.add(this.params.target.Position);
        return idealLookat;
    }

    update(timeElapsed) {
        const idealOffset = this.calculateIdealOffset();
        const idealLookat = this.calculateIdealLookat();

        // const t = 0.05;
        const t1 = 4.0 * timeElapsed;
        // const t1 = 1.0 - Math.pow(0.05, timeElapsed);
        const t2 = 1.0 - Math.pow(0.0005, timeElapsed);

        this.currentPosition.lerp(idealOffset, t1);
        this.currentLookat.lerp(idealLookat, t2);

        this.camera.position.copy(this.currentPosition);
        this.camera.lookAt(this.currentLookat);
    }
}
