import { useThree, useFrame } from "@react-three/fiber";
import { CubeTextureLoader, Euler } from "three";

export function SkyBox() {
    const scene = useThree((state) => state.scene);

    const e = new Euler();
    useFrame(({ clock }, delta) => {
        // console.log(scene.background.rotation)
        scene.backgroundRotation.copy(e.set(clock.getElapsedTime() / 50, clock.getElapsedTime() / 50, 0));
    });
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
    scene.backgroundIntensity = 0.5;
    return null;
}
