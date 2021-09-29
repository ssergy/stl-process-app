// show loaded stl file with lights
import {useLoader} from "@react-three/fiber";
import {useRef} from "react";
import React from 'react';
import {STLLoader} from 'three/examples/jsm/loaders/STLLoader';

export const Model3d = ({url}) => {
  const geom = useLoader(STLLoader, url);
  const ref = useRef();

  return <>
    <mesh ref={ref}>
      <primitive object={geom} attach="geometry"/>
      <meshStandardMaterial color={"gray"}/>
    </mesh>
    <ambientLight/>
    <pointLight position={[10, 10, 10]}/>
  </>;
};
