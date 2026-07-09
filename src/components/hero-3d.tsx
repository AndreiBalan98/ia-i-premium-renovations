import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, Sparkles } from "@react-three/drei";
import { MeshTransmissionMaterial } from "@react-three/drei";
import { useEffect, useRef, useState, Suspense } from "react";
import * as THREE from "three";
import type { Group } from "three";

function ProceduralEnvironment() {
  return (
    <Environment resolution={128} frames={1} background={false}>
      <Lightformer form="rect" intensity={3} color="#C9A55C" scale={[4, 2, 1]} position={[3, 2, 2]} target={[0, 0, 0]} />
      <Lightformer form="rect" intensity={1.5} color="#ffffff" scale={[3, 3, 1]} position={[-3, 1, 2]} target={[0, 0, 0]} />
      <Lightformer form="ring" intensity={2} color="#B08D57" scale={2.5} position={[0, -3, -2]} target={[0, 0, 0]} />
      <Lightformer form="rect" intensity={1} color="#ffffff" scale={[5, 1, 1]} position={[0, 4, -3]} target={[0, 0, 0]} />
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
          <meshBasicMaterial color="#C9A55C" wireframe transparent opacity={0.12} />
        </mesh>
      )}

      <mesh>
        <icosahedronGeometry args={[1.15, mobile ? 1 : 2]} />
        <MeshTransmissionMaterial
          samples={mobile ? 4 : 8}
          resolution={mobile ? 256 : 512}
          thickness={1.4}
          roughness={0.06}
          transmission={1}
          ior={1.4}
          chromaticAberration={0.04}
          anisotropy={0.15}
          color="#e8caa0"
          distortion={0.15}
          distortionScale={0.3}
          temporalDistortion={0.1}
        />
      </mesh>

      <mesh rotation={[Math.PI / 3, 0.4, 0]} position={[0.1, -0.1, 0.2]}>
        <torusGeometry args={[1.7, 0.02, 16, 64]} />
        <meshStandardMaterial color="#C9A55C" metalness={1} roughness={0.25} />
      </mesh>
      {!mobile && (
        <mesh rotation={[Math.PI / 2.4, -0.6, 0.3]} position={[-0.1, 0.15, -0.1]}>
          <torusGeometry args={[2.15, 0.015, 16, 64]} />
          <meshStandardMaterial color="#8B7355" metalness={1} roughness={0.3} />
        </mesh>
      )}

      {!mobile && <Sparkles count={40} scale={4} size={1.5} speed={0.25} color="#C9A55C" opacity={0.5} />}
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

export function Hero3D() {
  const mobile = useIsMobile();

  return (
    <Canvas
      camera={{ position: [1.2, 0, 6], fov: 38 }}
      dpr={mobile ? 1 : [1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.35} />
        <directionalLight position={[4, 4, 4]} intensity={1.1} color="#f2d9ae" />
        <directionalLight position={[-4, -2, -3]} intensity={0.3} color="#ffffff" />
        <pointLight position={[1.2, 0, 3]} intensity={0.6} color="#C9A55C" />
        <group position={[mobile ? 0 : 1.3, 0, 0]} scale={mobile ? 0.62 : 0.92}>
          <Composition mobile={mobile} />
        </group>
        <ProceduralEnvironment />
        <Rig mobile={mobile} />
      </Suspense>
    </Canvas>
  );
}
