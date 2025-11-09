import { useThree, useFrame } from "@react-three/fiber";
import { useScroll } from "@react-three/drei";
import { gsap } from "gsap";
import { useEffect } from "react";

export default function CameraScroll() {
  const { camera } = useThree();
  const scroll = useScroll();

  useEffect(() => {
    // 초기 위치
    camera.position.set(0, 1, 5);
  }, [camera]);

  useFrame(() => {
    const offset = scroll.offset; // 0~1 범위
    gsap.to(camera.position, {
      x: Math.sin(offset * Math.PI * 2) * 2,
      y: 1 + Math.sin(offset * Math.PI) * 1,
      z: 5 - offset * 5,
      duration: 0.5,
      ease: "power2.out",
    });
    camera.lookAt(0, 0, 0);
  });

  return null;
}
