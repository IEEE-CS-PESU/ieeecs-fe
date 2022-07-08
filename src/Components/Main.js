
import { Canvas } from '@react-three/fiber'
import { MeshReflectorMaterial, Environment } from '@react-three/drei'
import Frames from './Frames'
const Main = (props) => {

    return (
        <div>
            <Canvas style={{ width: "1418.4px", height: "850px" }} className="mt-10 ml-12" gl={{ alpha: false }} dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
                <color attach="background" args={['#191920']} />
                <fog attach="fog" args={['#191920', 0, 15]} />
                <Environment preset="city" />
                <group position={[0, -0.5, 0]}>
                    <Frames images={props.images} />
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                        <planeGeometry args={[50, 50]} />
                        <MeshReflectorMaterial
                            blur={[300, 100]}
                            resolution={2048}
                            mixBlur={1}
                            mixStrength={40}
                            roughness={1}
                            depthScale={1.2}
                            minDepthThreshold={0.4}
                            maxDepthThreshold={1.4}
                            color="#101010"
                            metalness={0.5}
                        />
                    </mesh>
                </group>
            </Canvas>
        </div>
    );
}

export default Main;