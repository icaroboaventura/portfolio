import { OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import Loader from './Loader'
import { Suspense, useEffect, useState } from 'react'

function TitleThree() {
  const { nodes } = useGLTF('/models/frontend.glb')
  const { size } = useThree()

  // Adjust the scale based on the width of the window
  const scale = size.width / 130

  return (
    <mesh scale={scale}>
      <hemisphereLight intensity={0.5} groundColor={'white'} />
      <directionalLight position={[5, 50, 5]} intensity={5} castShadow />

      <primitive
        object={nodes.frontend}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </mesh>
  )
}

const CameraUpdater = () => {
  const { camera, size } = useThree()

  useEffect(() => {
    camera.aspect = size.width / size.height
    camera.updateProjectionMatrix()
  }, [camera, size])

  return null
}

const TitleThreeCanvas = () => {
  const [aspect, setAspect] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    const handleResize = () => {
      setAspect({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Canvas
      frameloop="demand"
      resize={{ debounce: 0 }}
      shadows
      camera={{ position: [0, 20, 0], fov: 27 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader />}>
        <OrbitControls enableZoom={false} />
        <TitleThree />
        <CameraUpdater />
      </Suspense>
    </Canvas>
  )
}

export default TitleThreeCanvas
