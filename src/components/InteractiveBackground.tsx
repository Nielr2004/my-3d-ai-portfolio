import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function RotatingStars() {
  const ref = useRef<any>();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.x += 0.0001;
      ref.current.rotation.y += 0.0002;
    }
  });

  return (
    <Stars
      ref={ref}
      radius={100}
      depth={50}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  );
}

const InteractiveBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingStars />
      </Canvas>
    </div>
  );
};

export default InteractiveBackground;
