# 3D Scroll Web Prototype

## 📌 프로젝트 개요

이 프로젝트는 React + Three.js 기반의 **스크롤 연동 3D 웹 인터랙티브 프로토타입**입니다.  
스크롤을 내려가면 3D 모델, 카메라 이동, 텍스트 fade-in 등 다양한 연출이 나타납니다.  
개인 학습 및 팀 스터디용으로 제작한 **실습용 프로젝트**입니다.

---

## 🚀 주요 기능

- 스크롤 기반 3D 장면 전환  
- React + React Three Fiber(R3F) 활용 3D 모델 렌더링  
- ScrollControls를 통한 HTML + 3D 씬 동기화  
- styled-components 기반 CSS-in-JS 스타일링  
- Fade-in / 확대 / 카메라 이동 애니메이션  
- 반응형 레이아웃 지원 (미디어쿼리 적용)

---

## 🛠 기술 스택

| 구분 | 기술 |
|------|------|
| 프론트엔드 | React.js (Functional Components & Hooks) |
| 3D 렌더링 | Three.js + React Three Fiber (R3F) |
| 3D 유틸리티 | @react-three/drei (ScrollControls, useScroll 등) |
| 애니메이션 | GSAP (GreenSock Animation Platform) |
| 스타일링 | styled-components (CSS-in-JS) |
| 3D 모델 | GLTF / 더미 큐브(Blender로 생성) |
| 기타 | React Hooks (useState, useRef, useEffect), useFrame |

---

## 📂 폴더 구조

```text
three-scroll-proto/
├─ public/
│   └─ models/          # GLTF / 더미 3D 모델 위치
├─ src/
│   ├─ components/      # Scene, CameraScroll 등
│   ├─ styles/          # Layout.js 등 styled-components
│   ├─ App.js           # 메인 캔버스와 ScrollControls
│   └─ index.js
├─ package.json
└─ README.md