import * as React from 'react';
import { useRef, useState } from 'react';
import { Color, Mesh, TextureLoader } from 'three';

export default function Atmosphere(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>(null!);
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  return (
    <mesh {...props} ref={ref}>
      <sphereGeometry args={[2.2, 64, 64]} />
      <meshBasicMaterial
        wireframe={false}
        opacity={0.2}
        transparent={true}
        color={new Color(0xffffff)}
      />
    </mesh>
  );
}
