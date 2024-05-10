import * as THREE from "three"
import React, { Suspense, useState } from "react"
// import { easing } from "maath"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
// import { Sky, Bvh } from "@react-three/drei"
// import { EffectComposer, Selection, Outline, N8AO, TiltShift2, ToneMapping } from "@react-three/postprocessing"
// import { Box, Cactus, Scene, Sudo } from "./Scene"
// import Grass from "../public/Grass"
// import { PresentationControls } from "@react-three/drei"
import Configurator from "./components/Configurator"
import Experience from "./components/Experience"
import { Physics } from "@react-three/rapier"

import { createContext } from "react";

export const GardenSizeContext = createContext()


const App = () => {

  const [gardenWidth, setGardenWidth] = useState(18);
  const [gardenHeight, setGardenHeight] = useState(15);
  const [plantColor, setPlantColor] = useState('springgreen');
  const [plantSize, setPlantSize] = useState(4)
  const [wheels, setWheels] = useState(false);
  const [plantPositions, setPlantPositions] = useState([]); 
  

 
  return (
    <>
      <GardenSizeContext.Provider value={{gardenWidth, gardenHeight, setGardenWidth, setGardenHeight, plantColor, setPlantColor, plantSize, setPlantSize,  wheels, setWheels, plantPositions, setPlantPositions}}>
        <div className="app">
          {/* <Canvas flat dpr={[1, 1.5]} gl={{ antialias: false }} camera={{ position: [0, 1, 6], fov: 25, near: 1, far: 20 }}>
      <color attach="background" args={['#D1DEE7']} />
      <ambientLight intensity={1.5 * Math.PI} />
      
      <PresentationControls
        speed={1.5}
        global
        zoom={1}
        polar={[-0.1, Math.PI / 4]}
      >

          <Grass />
      </PresentationControls> */}


          <Canvas shadows camera={{ position: [8, 8, 8], fov: 30 }}>
            <color attach="background" args={['#D1DEE7']} />
            <ambientLight intensity={1.5 * Math.PI} />
            <Physics debug>
              <Suspense>
                <Experience />
              </Suspense>
            </Physics>

            {/* <Box position={[3, 1.4, 0.4]} scale={0.15} /> */}
            {/* <Sudo /> */}

            {/* <Suspense fallback={null}>
        <Model />
      </Suspense> */}
          </Canvas>
          <Configurator />
        </div>
      </GardenSizeContext.Provider>
    </>

  )
}

// function Effects() {
//   const { size } = useThree()
//   useFrame((state, delta) => {
//     easing.damp3(state.camera.position, [state.pointer.x, 1 + state.pointer.y / 2, 8 + Math.atan(state.pointer.x * 2)], 0.3, delta)
//     state.camera.lookAt(state.camera.position.x * 0.9, 0, -4)
//   })
//   return (
//     <EffectComposer stencilBuffer disableNormalPass autoClear={false} multisampling={4}>
//       <N8AO halfRes aoSamples={5} aoRadius={0.4} distanceFalloff={0.75} intensity={1} />
//       <Outline visibleEdgeColor="white" hiddenEdgeColor="white" blu r width={size.width * 1.25} edgeStrength={10} />
//       <TiltShift2 samples={5} blur={0.1} />
//       <ToneMapping />

//     </EffectComposer>
//   )
// }


export default App;

