import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Scene() {
  const modelPath = process.env.PUBLIC_URL + "/models/dummy.glb";
  const { scene } = useGLTF(modelPath);

  return (
    <primitive
      object={scene}
      position={[0, -1, 0]}
      scale={[1.2, 1.2, 1.2]}
    />
  );
}
