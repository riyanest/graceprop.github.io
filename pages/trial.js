import { Canvas } from "@react-three/fiber";
import React,{Suspense } from "react";
import Scene from './components/Scene.js'
import Header from './components/header'

export default function trial() {
   return (
    <div>
    <Header style={{position:"absolute",top:"0"}}/>
      <Canvas
      style={{ width:'100vw'
    ,height:'100vh'}}
        shadows={true}
        camera={{
          position: [0, 3, 9],
        }}
      >
        <ambientLight/>
        <Suspense fallback={null}>
          <Scene/>
        </Suspense>
      </Canvas>
    </div>
  );
}


