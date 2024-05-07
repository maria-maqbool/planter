import React, { Suspense, useRef, useState, useContext } from "react";
import {Box,  OrbitControls, useTexture } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
// import { useGLTF, useTexture } from '@react-three/drei'
import { GardenSizeContext } from '../App'


const Experience = () => {
  const map = useTexture('./textures/Stylized_Stone_Floor_005_basecolor.jpg');
  // const [gardenSize, setGardenSize] = useState([15, 0.5, 10]);
  // const [color, setColor] = useState('springgreen');


  const {gardenWidth, gardenHeight, plantColor} = useContext(GardenSizeContext)

  return (
    <>
    {console.log("gardenSize: ", gardenWidth, "gardenHeight:", gardenHeight)}
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 10, 0]} intensity={0.4} />
      <OrbitControls />

      <RigidBody position={[3, 5, 0]}>
        <Box>
          <meshStandardMaterial color={plantColor}/>
        </Box>
      </RigidBody>
      <RigidBody position={[6, 3, 0]}>
        <Box>
          <meshStandardMaterial color={plantColor}/>
        </Box>
      </RigidBody>
      <RigidBody position={[1, 4, 0]}>
        <Box>
          <meshStandardMaterial color={plantColor}/>
        </Box>
      </RigidBody>
      <RigidBody position={[2, 2, 0]}>
        <Box>
          <meshStandardMaterial color={plantColor}/>
        </Box>
      </RigidBody>
      <RigidBody type="fixed">
        <Box position={[0, 0, 0]} args={[gardenWidth, 0.3, gardenHeight]}>
          <meshStandardMaterial color='springgreen' map={map} />
        </Box>
      </RigidBody>
    </>
  )
}

export default Experience
