import { useThree } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

export function SkyBox() {
    const { scene } = useThree();

    const loader = new CubeTextureLoader();
    const texture = loader.load([
        "/textures/ulukai/corona_ft.png",
        "/textures/ulukai/corona_bk.png",
        "/textures/ulukai/corona_up.png",
        "/textures/ulukai/corona_dn.png",
        "/textures/ulukai/corona_rt.png",
        "/textures/ulukai/corona_lf.png",
    ]);

    scene.background = texture;
    //scene.backgroundBlurriness = 0;
    //scene.backgroundIntensity = 0.1;
    return null;
}
