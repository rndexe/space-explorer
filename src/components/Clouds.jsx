import { Cloud, Clouds as InstancedClouds } from "@react-three/drei";
import { MeshBasicMaterial } from "three";

export function Clouds() {
   
    return (
        <InstancedClouds material={MeshBasicMaterial}>
            <Cloud bounds={[5, 1, 1]} scale={20} volume={5} color="hotpink" opacity={0.2} fade={100} />
            {/* <Cloud scale={250} volume={3} color="orange" opacity={0.1} fade={100} /> */}
        </InstancedClouds>
    );
}
