import { useRef} from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useMemo } from 'react';

function Buildings() {
  const groupRef = useRef();

  const buildings = useMemo(() => {
    const items = [];
    const gridSize = 6;
    for (let x = -gridSize / 2; x < gridSize / 2; x++) {
      for (let z = -gridSize / 2; z < gridSize / 2; z++) {
        const height = 0.8 + Math.random() * 3.2;
        items.push({
          position: [x * 1.4, height / 2, z * 1.4],
          height,
          color: Math.random() > 0.75 ? '#4f46e5' : '#1e293b'
        });
      }
    }
    return items;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y += 0.0015;
    groupRef.current.rotation.x = state.pointer.y * 0.08;
    groupRef.current.rotation.z = -state.pointer.x * 0.05;
  });

  return (
    <group ref={groupRef}>
      {buildings.map((b, i) => (
        <mesh key={i} position={b.position}>
          <boxGeometry args={[0.8, b.height, 0.8]} />
          <meshStandardMaterial color={b.color} flatShading />
        </mesh>
      ))}
    </group>
  );
}

export default function CitySkyline() {
  return (
    <div className="skyline-canvas-wrap">
      <Canvas camera={{ position: [6, 4, 8], fov: 45 }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 8, 5]} intensity={1} color="#c7c9ff" />
        <directionalLight position={[-5, 3, -5]} intensity={0.35} color="#4f46e5" />
        <Buildings />
      </Canvas>
    </div>
  );
}