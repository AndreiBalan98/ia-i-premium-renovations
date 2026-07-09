import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh, Group } from "three";

function GoldenGeometry() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.15;
    group.current.rotation.x = Math.sin(t * 0.2) * 0.1;
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[1.4, 1]} />
          <MeshDistortMaterial
            color="#C9A55C"
            metalness={0.95}
            roughness={0.15}
            distort={0.25}
            speed={1.4}
          />
        </mesh>
      </Float>
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1}>
        <mesh position={[2.2, 0.8, -1]}>
          <boxGeometry args={[0.6, 0.6, 0.6]} />
          <meshStandardMaterial color="#B08D57" metalness={1} roughness={0.2} />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.6} floatIntensity={0.8}>
        <mesh position={[-2.4, -0.6, -0.5]}>
          <octahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial color="#8B7355" metalness={0.9} roughness={0.3} />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={1} floatIntensity={1.2}>
        <mesh position={[1.8, -1.4, 1]}>
          <torusGeometry args={[0.4, 0.15, 16, 32]} />
          <meshStandardMaterial color="#C9A55C" metalness={1} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  );
}

function Particles() {
  const mesh = useRef<Mesh>(null);
  useFrame((state) => {
    if (mesh.current) mesh.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });
  const count = 80;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
  }
  return (
    <points ref={mesh as never}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#C9A55C" transparent opacity={0.6} />
    </points>
  );
}

export function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#C9A55C" />
        <directionalLight position={[-5, -3, -5]} intensity={0.4} color="#ffffff" />
        <pointLight position={[0, 0, 3]} intensity={0.8} color="#B08D57" />
        <GoldenGeometry />
        <Particles />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
