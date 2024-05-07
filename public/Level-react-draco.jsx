/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 level-react-draco.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/level-react-draco.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cactus.geometry} material={materials.Cactus} position={[-0.425, 0.507, -0.624]} rotation={[Math.PI / 2, 0, 0]} />
      <group position={[-0.58, 0.828, -0.032]} rotation={[Math.PI / 2, 0, 0.469]}>
        <mesh geometry={nodes.Camera.geometry} material={materials.Level} />
        <mesh geometry={nodes.Camera_1.geometry} material={materials.Lens} />
      </group>
      <mesh geometry={nodes.Level.geometry} material={materials.Level} position={[-0.377, 0.688, 0.62]} rotation={[Math.PI / 2, -Math.PI / 9, 0]} />
      <mesh geometry={nodes.Pyramid.geometry} material={materials.Pyramid} position={[-0.801, 1.333, 0.252]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Sudo.geometry} material={materials.Level} position={[0.683, 0.328, -0.673]} rotation={[Math.PI / 2, 0, 0.29]} />
      <mesh geometry={nodes.SudoHead.geometry} material={materials.Level} position={[0.683, 0.328, -0.673]} rotation={[Math.PI / 2, 0, 0.29]} />
      <mesh geometry={nodes.React.geometry} material={materials.Cube} position={[-0.793, 1.25, 0.619]} rotation={[0, 1.309, 0]} />
    </group>
  )
}

useGLTF.preload('/level-react-draco.glb')
