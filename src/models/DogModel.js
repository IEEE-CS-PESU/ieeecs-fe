import { Canvas, useFrame } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";

const Model = () => {

    const mesh = useRef(null)
    useFrame(()=>(mesh.current.rotation.y = mesh.current.rotation.y += 0.006))
    const gltf = useLoader(GLTFLoader, "./assets/dog.glb");
    return (
      <>
        <primitive ref={mesh} object={gltf.scene} scale={1} position={[0,-1,0]} />
      </>
    );
  };
  
  export default function DogModel() {
    return (
        <Canvas camera={{position:[5,5,6], fov:70}}>
          <ambientLight intensity={0.9} />
          <Suspense fallback={null}>
            <Model />
            {/* <OrbitControls enableZoom={false} enableRotate={false} enablePan={false}/> */}
            {/* <Environment preset="sunset" background /> */}
          </Suspense>
        </Canvas>
    );
  }
  