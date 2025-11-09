import React from "react";
import { useGLTF } from "@react-three/drei";

export default function Scene() {
  // 더미 모델 (간단한 GLB 파일)
  const { scene } = useGLTF("/models/dummy.glb");

  return (
    <primitive
      object={scene}
      position={[0, -1, 0]}
      scale={[1.2, 1.2, 1.2]}
    />
  );
}