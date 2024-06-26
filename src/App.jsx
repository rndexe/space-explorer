import { Canvas } from "@react-three/fiber";
import { Loader, StatsGl } from "@react-three/drei";
import { SkyBox } from "./components/Skybox";
import { Ship } from "./components/Ship";
import { Asteroids } from "./components/Asteroids";
import { Environment } from "@react-three/drei";

export default function App() {
    return (
        <>
            <Canvas camera={{ far: 2000 }}>
                <Environment preset="dawn" />
                <directionalLight color="blue" intensity={2} position={[100, 100, 100]} />
                <SkyBox />
                <Asteroids count={100} />
                <Ship />
                <fog attach="fog" args={["black", 0, 2000]} />
                {import.meta.env.DEV && <StatsGl />}
            </Canvas>
            <Loader />
        </>
    );
}
