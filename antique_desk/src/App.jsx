import { useState , Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import Scence from "./Scene.jsx";
import A from "../armchair/A.jsx"

export default function App(){
  return(
      <div>
   <Canvas>
    <ambientLight />
    <OrbitControls />
    <Suspense fallback={null}>
        <Scence />
    </Suspense>
   </Canvas>
   <A />
      </div>
  )
}