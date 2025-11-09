import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
import Scene from "./components/Scene";
import CameraScroll from "./components/CameraScroll";
import { Container, Section, Title, FadeSection, FadeTitle } from "./styles/Layout";
import { useEffect, useState, useRef } from "react";


function FadeLastSection() {
  const scroll = useScroll();           // Drei의 scroll 훅
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef();

  useFrame(() => {
    // scroll.offset: 0 ~ 1 (전체 스크롤 범위)
    if (scroll.offset > 0.95) {        // 마지막 페이지 근처
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <FadeSection ref={sectionRef} visible={visible}>
      <FadeTitle>
        <h2>사용된 기술 스택 정보</h2>
        <dl>
          <dt>Framework</dt> <dd> <span>React.js</span></dd>
          <dt>3D Rendering</dt> <dd><span>Three.js</span> <span>React Three Fiber(R3F)</span> <span>@react-three/drei</span> </dd>
          <dt>3D Model</dt> <dd><span>Blender (GLTF Dummy Model)</span></dd>
          <dt>Scroll Animation</dt> <dd><span>ScrollControls (@react-three/drei)</span> <span>useScroll() Hook</span> <span>GSAP</span> </dd>
          <dt>Styling</dt> <dd><span>styled-components</span></dd>
        </dl>

        <div>
            <p>📌핵심 개념</p>
            <span>
              (1) React Hooks : 상태 관리(useState), DOM 참조(useRef), 라이프사이클(useEffect)
            </span>
            <span>
              (2) Scroll-driven UI : 스크롤 위치에 따라 3D 씬과 HTML이 상호 작용
            </span>
            <span>
              (3) Component composition : Section, FadeSection (재사용 가능한 컴포넌트)
            </span>
            <span>
              (4) CSS-in-JS animation : styled-components + opacity/transition
            </span>
        </div>
      </FadeTitle>
    </FadeSection>
  );
}


export default function App() {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      <ScrollControls pages={4} damping={0.2}>
        <Scene />

        <Scroll html>
          <Container>
            <Section>
              <Title>Jay Anderson <br/> - 3D Web Test -</Title>
            </Section>
            <Section>
              <Title>스크롤 중입니다..</Title>
            </Section>
            <Section>
              <Title>더 내려주세요!</Title>
            </Section>
            <FadeLastSection />
          </Container>
        </Scroll>

        <CameraScroll />
      </ScrollControls>
    </Canvas>
  );
}