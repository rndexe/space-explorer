import { Canvas } from "@react-three/fiber";
import { Environment, Loader, Stats, KeyboardControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { SkyBox } from "./components/Skybox";
import { Ship } from "./components/Ship";
import { Asteroids } from "./components/Asteroids";

export default function App() {
    return (
        <>
            <Canvas>
                {import.meta.env.DEV && <Perf minimal />}
                <Environment preset="dawn" />
                <directionalLight color="blue" intensity={2} position={[-100, 100, 100]} />
                <SkyBox />
                <KeyboardControls
                    map={[
                        { name: "up", keys: ["KeyW", "ArrowUp"] },
                        { name: "down", keys: ["KeyS", "ArrowDown"] },
                        { name: "left", keys: ["KeyA", "ArrowLeft"] },
                        { name: "right", keys: ["KeyD", "ArrowRight"] },
                        { name: "boost", keys: ["Space"] },
                        { name: "shift", keys: ["ShiftLeft"] },
                    ]}
                >
                    <Asteroids count={100} />
                    <Ship />
                </KeyboardControls>
            </Canvas>
            {import.meta.env.DEV && (
                <>
                    <Loader />
                    <Stats />
                </>
            )}
        </>
    );
}
