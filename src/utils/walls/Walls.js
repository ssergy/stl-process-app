import React from 'react';
import {getEulerAngle} from "../../utils";

const wallXY = [0, 0, 0];
const wallXZ = [getEulerAngle(90), 0, 0];
const wallYZ = [0, getEulerAngle(90), 0];


// get wall rotation by type, 0 - xy, 1 - xz, 2  - yz
const wallByType = (type) =>  {
  return !type ? wallXY : (type === 1 ? wallXZ : wallYZ);
}

// get wall position by type, 0 - xy, 1 - xz, 2  - yz
const WallPosByType = (type, pos) => {
  return !type ? [0, 0, pos] : (type === 1 ? [0, pos, 0] : [pos, 0, 0]);
}

export const Walls = ({items}) => {
  return <>
    {items && items.length > 0 && items.filter(i => i.pos !== null && i.show).map((i, k) => {
      console.log(i.type, ':: ', wallByType(i.type), WallPosByType(i.type, i.pos));

      return <mesh key={"mi_"+k} rotation={wallByType(i.type)} position={WallPosByType(i.type, i.pos)}>
        <planeGeometry attach="geometry" args={[100, 100]} doubleSide={true}/>
        <meshStandardMaterial color={i.color} side={2}/>
      </mesh>;
    })}
  </>
}
