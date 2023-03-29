import * as React from 'react';
import { useRef, useState } from 'react';
import { Mesh, TextureLoader } from 'three';
import Atmosphere from './Atmosphere';

export default function Satellite({ position }) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  return (
    <mesh
      position={position}
      ref={ref}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[0.1, 64, 64]} />
      <meshBasicMaterial color={hovered ? 'hotpink' : 'blue'} />
    </mesh>
  );
}
