import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SkyBox } from "./components/Skybox";
import { Ship } from "./components/Ship";

export default function App() {
    return (
        <Canvas>
            <ambientLight intensity={0.1} />
            <directionalLight color="red" position={[0, 0, 5]} />
            <Ship />
            <SkyBox />
            <OrbitControls />
        </Canvas>
    );
}
