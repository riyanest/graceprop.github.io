import { Scroll,Point, Points, ScrollControls } from '@react-three/drei'
import { useFrame , useLoader,useThree ,Canvas} from '@react-three/fiber'
import React,{ useRef,Suspense }  from 'react'
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import Html from './Html'
// import Particles from './particles'


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

const particleColors = ['#673ab7', '#f4b677', 'orange', 'blue', '#8bc34a', 'purple']

const Particles=({ size = 5000 })=> {
  const { width, height } = useThree((state) => state.viewport)
  return (
    <Points limit={size}>
      <pointsMaterial size={0.1} vertexColors />
      {Array.from({ length: size }).map((_, i) => (
        <Point
          key={i}
          position={[(0.5 - Math.random()) * width * 2, 0.5 * height + Math.random() ** 0.25 * height * -3, (0.5 - Math.random()) * 25]}
          color={particleColors[Math.floor(Math.random() * (particleColors.length - 1))]}
        />
      ))}
    </Points>
  )
}

export default function Scene() {
  // useFrame(({ mouse, camera }) => {
  //   camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouse.x * 0.5, 0.03)
  //   camera.position.y = THREE.MathUtils.lerp(camera.position.y, mouse.y * 0.8, 0.01)
  //   camera.position.z = THREE.MathUtils.lerp(camera.position.z, Math.max(4, Math.abs(mouse.x * mouse.y * 8)), 0.01)
  //   camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, mouse.x * -Math.PI * 0.025, 0.001)
  // })
  return (
    <>
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
        </Suspense>
      </Canvas>

    </>
  )
}

