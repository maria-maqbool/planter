import React, { useRef } from "react"
import { useGLTF } from "@react-three/drei"

export function Model(props) {
  const { materials } = useGLTF("/model.gltf")
  return (
    <group {...props} dispose={null}>
      <mesh material={materials.Material} position={[-0.08, 0, 0.25]} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload("/model.gltf")
















// import React, { useRef } from 'react'
// import { useGLTF } from '@react-three/drei'

// export function Model(props) {
//   const { nodes, materials } = useGLTF('/model.gltf')
//   return (
//     <group {...props} dispose={null}>
//       <mesh geometry={nodes.Text.geometry} material={materials.Material} position={[-0.08, 0, 0.25]} rotation={[Math.PI / 2, 0, 0]} />
//     </group>
//   )
// }

// useGLTF.preload('/model.gltf')