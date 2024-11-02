import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useGLTF, Center } from '@react-three/drei';

const Model = ({ rotationY }) => {
  const { scene } = useGLTF('/firstklaz-head.glb');
  
  const CameraAdjuster = () => {
    const { camera } = useThree();
    
    useEffect(() => {
      camera.position.set(0, 0, 2);
      camera.lookAt(0, 0, 0);
    }, [camera]);
    
    return null;
  };

  return (
    <Center scale={1.05}>
      <group rotation-y={rotationY}>
        <primitive 
          object={scene} 
          position={[0, 0, 0]}
        />
      </group>
      <CameraAdjuster />
    </Center>
  );
};

const ModelViewer = () => {
  const [rotationY, setRotationY] = React.useState(0);
  const isDragging = useRef(false);
  const previousX = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    previousX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (isDragging.current) {
      const deltaX = e.clientX - previousX.current;
      setRotationY(prev => prev + deltaX * 0.01);
      previousX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Handle touch events for mobile
  const handleTouchStart = (e) => {
    isDragging.current = true;
    previousX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    if (isDragging.current) {
      const deltaX = e.touches[0].clientX - previousX.current;
      setRotationY(prev => prev + deltaX * 0.01);
      previousX.current = e.touches[0].clientX;
    }
  };

  return (
    <div 
      className="model-viewer" 
      style={{ width: '100%', height: '100vh', cursor: 'grab' }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      <Canvas>
        <ambientLight intensity={0.7} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.5} />
        <Suspense fallback={null}>
          <Model rotationY={rotationY} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelViewer;