import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

const AnimatedSphere = () => {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#00BFFF"
          attach="material"
          distort={0.5}
          speed={1.5}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} color="#B300FF" intensity={0.5} />
        <AnimatedSphere />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;