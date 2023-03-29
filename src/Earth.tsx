import * as React from 'react';
import { useRef, useState } from 'react';
import { Mesh, TextureLoader } from 'three';
import Atmosphere from './Atmosphere';

export default function Earth(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  const texture = new TextureLoader().load('assets/8k_earth_daymap.jpg');
  const textureSpec = new TextureLoader().load(
    'assets/8k_earth_specular_map.tif'
  );
  const textureNormal = new TextureLoader().load(
    'assets/8k_earth_normal_map.tif'
  );

  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[6.378137, 64, 64]} />
      <meshPhongMaterial
        wireframe={false}
        map={texture}
        specularMap={textureSpec}
        normalMap={textureNormal}
      />
      <Atmosphere />
    </mesh>
  );
}
