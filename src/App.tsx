import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

import Box from './Box';

export default function App(): JSX.Element {
  return (
    <Canvas style={{ height: '100vh' }}>
      <ambientLight />
      <pointLight position={[10, 20, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls />
      <gridHelper />
    </Canvas>
  );
}
