import { Environment, Lightformer } from "@react-three/drei"

function StudioLights() {
  return (
    <group name="light">
        <Environment>
            <group>
                <Lightformer
                    form="rect"
                    position={[-10, 5, -5]}
                    intensity={10}
                    scale={10}
                    rotateY={Math.PI / 2}
                />
                <Lightformer
                    form="rect"
                    position={[10, 0, 1]}
                    intensity={10}
                    scale={10}
                    rotateY={Math.PI / 2}
                />
            </group>
        </Environment>
        <spotLight
            position={[-2, 10, 5]}
            angle={0.15}
            decay={0}
            intensity={Math.PI * 0.2}
        />
        <spotLight
            position={[0, -25, 10]}
            angle={0.15}
            decay={0}
            intensity={Math.PI * 0.2}
        />
        <spotLight
            position={[0, 15, 5]}
            angle={0.15}
            decay={0.1}
            intensity={Math.PI * 1}
        />
    </group>
  )
}

export default StudioLights