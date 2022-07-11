import { Scroll, ScrollControls } from '@react-three/drei'
import { useFrame , useLoader } from '@react-three/fiber'
import React,{ useRef } from 'react'
import * as THREE from 'three'
import House from './house'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Html from './Html'
import earthImg from '../../public/worldMap.jpg'
import { Particles } from './particles'
const Sphere=()=>{
  const base = useLoader(TextureLoader, 'worldMap.jpg')
  const ref=useRef()
   useFrame(() => (ref.current.rotation.x=ref.current.rotation.y += 0.001))
  return(
     <mesh visible castShadow ref={ref}>
     <directionalLight intensity={0.5} />
     <sphereGeometry attach="geometry" args={[2, 32, 32]} />
     <meshBasicMaterial
         map={base}
        color="white"
     />
     </mesh>
  )
}
export default function Scene() {
  useFrame(({ mouse, camera }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03)
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01)
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(4, Math.abs(mouse.x * mouse.y * 8)), 0.01)
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001)
  })
  return (
    <>
    <ScrollControls pages={2}>
      <Scroll>
      <Sphere/>
<Particles/>
      </Scroll>
      <Scroll html>
      <div className="banner"
        position={[0, 0, 0]}>
          <div className="banner-text">
<h1 className="banner-title">            Find Real Estate<br/> 
            That suits you.</h1>
            <p className="banner-text-c">Family run property consultantcy specialised in Residential, Commercial, Projects<br/> as well as investment with best analysis for your yield</p>
            <button className="banbutton">Get Started</button>
          </div>

        </div>
        <Html />
      </Scroll>
    </ScrollControls>
    </>
  )
}

