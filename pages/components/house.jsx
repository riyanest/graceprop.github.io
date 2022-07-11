
import React, {  useState, Suspense } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const House = () => {
  const gltf = useLoader(GLTFLoader,'./scene.gltf');
  return (
    <>
    <Suspense fallback={null}>
      <primitive
       
        object={gltf.scene}
        position={[0,0,0]}
        scale={1}
      />
      </Suspense>
    </>
  );
};

export default House;