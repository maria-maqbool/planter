import React, { Suspense, useRef, useState, useContext } from "react";
import { Box, OrbitControls, useTexture } from "@react-three/drei"
import { RigidBody } from "@react-three/rapier"
// import { useGLTF, useTexture } from '@react-three/drei'
import { GardenSizeContext } from '../App'
import Plant from "./Plant";


const Experience = () => {
  const map = useTexture('./textures/Stylized_Stone_Floor_005_basecolor.jpg');
  const { gardenWidth, gardenHeight, plantColor, plantPositions } = useContext(GardenSizeContext)

  const [hover, setHover] = useState(false)


  const cube = useRef();
  const jump = () => {
    if (cube.current) {
      cube.current.applyImpulse({ x: 4, y: 0.1, z: 0 });
    }
  };



  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[-10, 10, 0]} intensity={0.4} />

       {/* Render the Plant components based on plant positions */}
       {plantPositions.map((position, index) => (
        <Plant key={index} position={position} />
      ))}
      
      <OrbitControls />

      <RigidBody position={[3, 5, 0]} ref={cube}>
        <Box onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}
          onClick={jump} >
          <meshStandardMaterial color={hover ? "blue" : 'black'} />
        </Box>
      </RigidBody>

      <RigidBody position={[6, 3, 0]} >
        <Box>
          <meshStandardMaterial color={plantColor} />
        </Box>
      </RigidBody>

      <RigidBody position={[2, 2, 0]}>
        <Box>
          <meshStandardMaterial color={plantColor} />
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
