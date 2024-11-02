import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { 
  useGLTF, 
  Center, 
  Environment, 
  AccumulativeShadows,
  RandomizedLight,
  ContactShadows,
  Stage
} from '@react-three/drei';

const LogoModel = ({ rotationY, scale }) => {
  const { scene } = useGLTF('/firstklaz-logo.glb');
  
  useEffect(() => {
    // Enhance the material properties
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.metalness = 1.1;  // Increase metalness
        child.material.roughness = 0.1;  // Decrease roughness for more reflection
        child.material.envMapIntensity = 1.5;  // Enhance environment map reflection
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  const CameraAdjuster = () => {
    const { camera } = useThree();
    
    useEffect(() => {
      camera.position.set(0, 0.15, 2);
      camera.lookAt(0, 0, 0);
    }, [camera]);
    
    return null;
  };

  return (
    <Center scale={scale}>
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

const LogoModelViewer = ({handleHome}) => {
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
    <>
    <div 
      className="logo-model-viewer model-viewer-desktop" 
      style={{ width: '200px', height: '100px', cursor: 'pointer' }}
      onClick={handleHome}
      // onMouseDown={handleMouseDown}
      // onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUp}
      // onMouseLeave={handleMouseUp}
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
      // onTouchEnd={handleMouseUp}
    >
      <Canvas shadows camera={{ position: [0, 0, 2], fov: 50 }}>
        {/* <color attach="background" args={['yellow']} /> */}
        <Suspense fallback={null}>
          <Stage
            intensity={1}
            environment="city"
            adjustCamera={false}
          >
            <LogoModel scale={1} rotationY={rotationY} />
          </Stage>
          <Environment preset="city" background={false} />
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.75}
            scale={10}
            blur={2.5}
            far={4}
          />
        </Suspense>
      </Canvas>
    </div>
    <div 
      className="logo-model-viewer model-viewer-mobile" 
      style={{ width: '200px', height: '100px', cursor: 'pointer' }}
      onClick={handleHome}
      // onMouseDown={handleMouseDown}
      // onMouseMove={handleMouseMove}
      // onMouseUp={handleMouseUp}
      // onMouseLeave={handleMouseUp}
      // onTouchStart={handleTouchStart}
      // onTouchMove={handleTouchMove}
      // onTouchEnd={handleMouseUp}
    >
      <Canvas shadows camera={{ position: [0, 0, 2], fov: 50 }}>
        {/* <color attach="background" args={['yellow']} /> */}
        <Suspense fallback={null}>
          <Stage
            intensity={1}
            environment="city"
            adjustCamera={false}
          >
            <LogoModel scale={0.7} rotationY={rotationY} />
          </Stage>
          <Environment preset="city" background={false} />
          <ContactShadows
            position={[0, -1.4, 0]}
            opacity={0.75}
            scale={10}
            blur={2.5}
            far={4}
          />
        </Suspense>
      </Canvas>
    </div>
    </>
  );
};

export default LogoModelViewer;