/* eslint-disable */
import * as React from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './Box';
import { Stats, OrbitControls } from '@react-three/drei';
import Polyhedron from './Polyhedron';
import { BoxGeometry, DodecahedronGeometry, SphereGeometry } from 'three';
import Earth from './Earth';

export default function App() {
  const polyhedron = [
    new BoxGeometry(),
    new SphereGeometry(0.785398),
    new DodecahedronGeometry(0.785398),
  ];

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <Earth />
      <OrbitControls />
      <axesHelper args={[1]} />
      <Stats />
    </Canvas>
  );
}
