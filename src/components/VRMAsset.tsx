import { VRM, VRMLoaderPlugin, VRMUtils } from '@pixiv/three-vrm';
import { useLoader } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

import type { Group, Scene } from 'three';

interface Props {
  url: string;
}

export default function VRMAsset({ url }: Props) {
  const [scene, setScene] = useState<Scene | Group | null>(null);

  const gltf = useLoader(GLTFLoader, url, loader => {
    (loader as GLTFLoader).register(parser => new VRMLoaderPlugin(parser));
  });

  useEffect(() => {
    VRMUtils.removeUnnecessaryJoints(gltf.scene);
    const vrm = gltf.userData.vrm as VRM;
    setScene(vrm.scene);
    console.log(vrm);
  }, [gltf, setScene]);

  if (scene === null) {
    return null;
  }

  return <primitive object={scene} dispose={null} />;
}
