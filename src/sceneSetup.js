import { AmbientLight, DirectionalLight, CubeTextureLoader, GridHelper, AxesHelper, FogExp2 } from "three";

export function setupLights(scene) {
    let light = new DirectionalLight(0xffffff);
    light.position.set(100, 100, 100);
    light.target.position.set(0, 0, 0);
    scene.add(light);

    light = new AmbientLight(0x404040);
    scene.add(light);
}

export function loadBackground(scene) {
    const loader = new CubeTextureLoader();
    const texture = loader.load([
        "textures/ulukai/corona_ft.png",
        "textures/ulukai/corona_bk.png",
        "textures/ulukai/corona_up.png",
        "textures/ulukai/corona_dn.png",
        "textures/ulukai/corona_rt.png",
        "textures/ulukai/corona_lf.png",
    ]);

    scene.background = texture;
    //scene.backgroundBlurriness = 0;
    //scene.backgroundIntensity = 0.1;
}

export function addHelpers(scene) {
    const size = 100;
    const divisions = 10;

    const gridHelper = new GridHelper(size, divisions);
    scene.add(gridHelper);

    const axesHelper = new AxesHelper(100);
    scene.add(axesHelper);
}

export function addFog(scene) {
    //scene.fog = new FogExp2(0x444444, 0.0002);
}
