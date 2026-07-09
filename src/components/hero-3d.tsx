import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, Sparkles } from "@react-three/drei";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useEffect, useRef, useState, Suspense } from "react";
import * as THREE from "three";
import type { Group } from "three";

function ProceduralEnvironment() {
  return (
    <Environment resolution={128} frames={1} background={false}>
      <Lightformer form="rect" intensity={8} color="#C9A55C" scale={[4, 2, 1]} position={[3, 2, 2]} target={[0, 0, 0]} />
      <Lightformer form="rect" intensity={4} color="#fff7e8" scale={[3, 3, 1]} position={[-3, 1, 2]} target={[0, 0, 0]} />
      <Lightformer form="ring" intensity={6} color="#e0b877" scale={2.5} position={[0, -3, -2]} target={[0, 0, 0]} />
      <Lightformer form="rect" intensity={3} color="#ffffff" scale={[5, 1, 1]} position={[0, 4, -3]} target={[0, 0, 0]} />
    </Environment>
  );
}

function Composition({ mobile }: { mobile: boolean }) {
  const group = useRef<Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const target = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    target.current.x = state.pointer.x;
    target.current.y = state.pointer.y;

    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        t * 0.12 + target.current.x * 0.35,
        Math.min(1, delta * 2),
      );
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        target.current.y * -0.2 + Math.sin(t * 0.15) * 0.05,
        Math.min(1, delta * 2),
      );
      group.current.position.y = Math.sin(t * 0.4) * 0.12;
    }
    if (shell.current) {
      shell.current.rotation.y = -t * 0.06;
      shell.current.rotation.z = t * 0.03;
    }
  });

  return (
    <group ref={group}>
      {!mobile && (
        <mesh ref={shell}>
          <icosahedronGeometry args={[1.9, 1]} />
          <meshBasicMaterial color="#e0b877" wireframe transparent opacity={0.28} />
        </mesh>
      )}

      <mesh>
        <icosahedronGeometry args={[1.15, mobile ? 1 : 2]} />
        <MeshTransmissionMaterial
          samples={mobile ? 4 : 8}
          resolution={mobile ? 256 : 512}
          thickness={1.4}
          roughness={0.08}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.05}
          anisotropy={0.15}
          color="#f4d9a8"
          background={new THREE.Color("#5a4020")}
          distortion={0.15}
          distortionScale={0.3}
          temporalDistortion={0.1}
        />
      </mesh>

      <mesh rotation={[Math.PI / 3, 0.4, 0]} position={[0.1, -0.1, 0.2]}>
        <torusGeometry args={[1.7, 0.035, 16, 64]} />
        <meshStandardMaterial color="#e0b877" metalness={1} roughness={0.2} emissive="#7a5a2a" emissiveIntensity={0.4} />
      </mesh>
      {!mobile && (
        <mesh rotation={[Math.PI / 2.4, -0.6, 0.3]} position={[-0.1, 0.15, -0.1]}>
          <torusGeometry args={[2.15, 0.025, 16, 64]} />
          <meshStandardMaterial color="#C9A55C" metalness={1} roughness={0.25} emissive="#6b4e22" emissiveIntensity={0.35} />
        </mesh>
      )}

      {!mobile && <Sparkles count={70} scale={4.5} size={2.5} speed={0.25} color="#f4d9a8" opacity={0.8} />}
    </group>
  );
}

function Rig({ mobile }: { mobile: boolean }) {
  const { camera } = useThree();
  useFrame((state) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, state.pointer.x * 0.3, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, state.pointer.y * 0.15, 0.03);
    camera.lookAt(mobile ? 0 : 1.2, 0, 0);
  });
  return null;
}

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return mobile;
}

function useWebGLSupport() {
  const [supported, setSupported] = useState(false);
  useEffect(() => {
    try {
      const canvas = document.createElement("canvas");
      setSupported(!!(canvas.getContext("webgl2") ?? canvas.getContext("webgl")));
    } catch {
      setSupported(false);
    }
  }, []);
  return supported;
}

// CSS-only stand-in for browsers with WebGL blocked (e.g. Brave shields):
// a glowing core with slowly rotating gold orbit rings and twinkling dots.
function HeroFallback() {
  const dots = [
    { top: "12%", left: "70%", delay: "0s" },
    { top: "24%", left: "38%", delay: "0.7s" },
    { top: "45%", left: "88%", delay: "1.4s" },
    { top: "68%", left: "18%", delay: "0.3s" },
    { top: "80%", left: "62%", delay: "1.1s" },
    { top: "35%", left: "8%", delay: "1.8s" },
    { top: "58%", left: "45%", delay: "0.5s" },
    { top: "15%", left: "22%", delay: "1.6s" },
  ];
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[46%] md:left-[68%] -translate-x-1/2 -translate-y-1/2 h-[24rem] w-[24rem] md:h-[36rem] md:w-[36rem] max-h-[92vw] max-w-[92vw]">
        <div className="absolute inset-[26%] rounded-full bg-[radial-gradient(circle_at_35%_30%,#f4d9a8,#a3742f_45%,#3a2a12_75%,transparent_95%)] opacity-90 fallback-pulse" />
        <div className="absolute inset-[10%] rounded-full border border-gold/45 [scale:1_0.42] fallback-spin" />
        <div className="absolute inset-0 rounded-full border border-gold/25 [scale:0.42_1] fallback-spin-reverse" />
        <div className="absolute inset-[18%] rounded-full border border-dashed border-gold/20 fallback-spin-slow" />
        {dots.map((d, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold fallback-twinkle"
            style={{ top: d.top, left: d.left, animationDelay: d.delay }}
          />
        ))}
      </div>
    </div>
  );
}

export function Hero3D() {
  const mobile = useIsMobile();
  const webgl = useWebGLSupport();

  if (!webgl) return <HeroFallback />;

  return (
    <Canvas
      camera={{ position: [1.2, 0, 6], fov: 38 }}
      dpr={mobile ? 1 : [1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 4, 4]} intensity={2} color="#f2d9ae" />
        <directionalLight position={[-4, -2, -3]} intensity={0.6} color="#ffffff" />
        <pointLight position={[1.2, 0, 3]} intensity={1.4} color="#e0b877" />
        <group position={[mobile ? 0 : 1.3, 0, 0]} scale={mobile ? 0.62 : 0.92}>
          <Composition mobile={mobile} />
        </group>
        <ProceduralEnvironment />
        <Rig mobile={mobile} />
      </Suspense>
    </Canvas>
  );
}
