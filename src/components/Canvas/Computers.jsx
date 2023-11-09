import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import styles from './canvas.module.css'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
  const computer = useGLTF('./pc.glb')

  return (
    <mesh>
      <hemisphereLight
        intensity={1}
        groundColor="black"
      />
      <ambientLight intensity={1.5} />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.25 : 0.4}
        position={isMobile ? [2, -1, 0.4] : [2, -1, 0]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  // Initialize based on the current viewport width
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 480px)').matches
  )

  useEffect(() => {
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    const mediaQuery = window.matchMedia('(max-width: 500px)')
    mediaQuery.addListener(handleMediaQueryChange) // Fallback for older browsers

    // Call the handler immediately to set the initial state
    handleMediaQueryChange(mediaQuery)

    return () => mediaQuery.removeListener(handleMediaQueryChange)
  }, [])

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      // className={styles.container}
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        right: '-2.5%',
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
