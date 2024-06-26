/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Sergio Sotomayor (https://sketchfab.com/sergiosotomayor)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/toon-spaceship-ce3e358791a84ebc8c9c36f71ce3e603
Title: Toon Spaceship
*/

import { useGLTF, Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

const _v = new Vector3();
const _cameraOffset = new Vector3(0, 2.5, 6.0);

export function Ship() {
    const { nodes, materials } = useGLTF("/models/spaceship/scene.gltf");

    const shipRef = useRef();
    const textRef = useRef();

    useFrame(({ camera, clock }, delta) => {
        // const time = clock.getElapsedTime();

        camera.position.lerp(_v.copy(shipRef.current.position).add(_cameraOffset), delta * 10);

        //shipRef.current.translateZ(-20 * delta);
        // const { x, y, z } = shipRef.current.position;
        // if (textRef.current) textRef.current.innerText = `${x.toFixed(1)},${y.toFixed(1)},${z.toFixed(1)}`;
    });

    return (
        <group ref={shipRef} dispose={null}>
            <group position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={1}>
                <mesh geometry={nodes.Spaceship_fuselage_0.geometry}>
                    <meshStandardMaterial color={"#121212"} />
                </mesh>
                <mesh geometry={nodes.Spaceship_frames_0.geometry}>
                    <meshStandardMaterial color={"black"} />
                </mesh>
                {/* <mesh geometry={nodes.Spaceship_glass_0.geometry} material={materials.glass} /> */}
                <mesh geometry={nodes.Spaceship_paint_0.geometry}>
                    <meshStandardMaterial color={"black"} />
                </mesh>
                <mesh geometry={nodes.Spaceship_motors_0.geometry}>
                    <meshBasicMaterial color={"black"} />
                </mesh>
            </group>
            {/* <Html
                center
                style={{ color: "white", background: "black", padding: "2px", fontSize: "16px" }}
                ref={textRef}
                distanceFactor={10}
                position={[0, -1.2, 0]}
            /> */}
        </group>
    );
}

useGLTF.preload("/models/spaceship/scene.gltf");
