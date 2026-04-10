import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const NODE_COUNT = 80;
const CONNECTION_DISTANCE = 2.2;
const SPREAD = 8;

function Network() {
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  // Posições iniciais aleatórias
  const positions = useMemo(() => {
    const pos = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * SPREAD * 2.5;
      pos[i * 3 + 1] = (Math.random() - 0.5) * SPREAD;
      pos[i * 3 + 2] = (Math.random() - 0.5) * SPREAD * 0.5;
    }
    return pos;
  }, []);

  // Velocidades aleatórias para cada nó
  const velocities = useMemo(() => {
    const vel = new Float32Array(NODE_COUNT * 3);
    for (let i = 0; i < NODE_COUNT; i++) {
      vel[i * 3]     = (Math.random() - 0.5) * 0.004;
      vel[i * 3 + 1] = (Math.random() - 0.5) * 0.004;
      vel[i * 3 + 2] = 0;
    }
    return vel;
  }, []);

  const pointGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions.slice(), 3));
    return geo;
  }, [positions]);

  const lineGeo = useMemo(() => new THREE.BufferGeometry(), []);

  useFrame(() => {
    if (!pointsRef.current || !linesRef.current) return;

    const pos = pointsRef.current.geometry.attributes.position.array as Float32Array;

    // Mover cada nó
    for (let i = 0; i < NODE_COUNT; i++) {
      pos[i * 3]     += velocities[i * 3];
      pos[i * 3 + 1] += velocities[i * 3 + 1];

      // Rebater nas bordas
      if (Math.abs(pos[i * 3])     > SPREAD * 1.25) velocities[i * 3]     *= -1;
      if (Math.abs(pos[i * 3 + 1]) > SPREAD * 0.5)  velocities[i * 3 + 1] *= -1;
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    // Recalcular linhas entre nós próximos
    const linePositions: number[] = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const dx = pos[i * 3]     - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < CONNECTION_DISTANCE) {
          linePositions.push(
            pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2],
            pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2],
          );
        }
      }
    }

    lineGeo.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(linePositions), 3),
    );
  });

  return (
    <>
      <points ref={pointsRef} geometry={pointGeo}>
        <pointsMaterial
          color="#38bdf8"
          size={0.06}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>
      <lineSegments ref={linesRef} geometry={lineGeo}>
        <lineBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.18}
        />
      </lineSegments>
    </>
  );
}

export const ParticleNetwork = () => (
  <Canvas
    camera={{ position: [0, 0, 6], fov: 75 }}
    style={{ position: 'absolute', inset: 0, zIndex: -1 }}
    gl={{ alpha: true, antialias: false }}
  >
    <Network />
  </Canvas>
);
