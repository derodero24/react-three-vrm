import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

import Box from './components/Box';
import VRMAsset from './components/VRMAsset';

export default function App(): JSX.Element {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <Suspense fallback={null}>
        <VRMAsset url="./models/model.vrm" />
      </Suspense>
      <OrbitControls />
      <gridHelper />
    </Canvas>
  );
}
