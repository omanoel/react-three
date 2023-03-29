/* eslint-disable */
import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import { Stats, OrbitControls } from '@react-three/drei';
import Earth from './Earth';
import Satellite from './Satellite';
import Atmosphere from './Atmosphere';

export default function App() {
  // const polyhedron = [
  //   new BoxGeometry(),
  //   new SphereGeometry(0.785398),
  //   new DodecahedronGeometry(0.785398),
  // ];

  return (
    <Canvas camera={{ position: [10, 10, 10] }}>
      <ambientLight intensity={0.5} />
      <Earth />
      <Satellite position={[7, 0, 0]} />
      <OrbitControls />
      <axesHelper args={[1]} />
      <Stats />
    </Canvas>
  );
}
