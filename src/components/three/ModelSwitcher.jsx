import { PresentationControls } from "@react-three/drei";
import { useRef } from "react"
import MacBook14 from "../models/Macbook-14";
import MacBook16 from "../models/Macbook-16";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ANIMATION_DURATION=1;
const OFFSET_DISTANCE=5;

const fadeMeshes = (group, opacity)=>{
  if(!group) return;
  group.traverse((child)=>{
    if(child.isMesh){
      child.material.transparent = true;
      gsap.to(child.material, {opacity, duration: ANIMATION_DURATION});
    }
  })
}

const moveGroup = (group, x)=>{
  if(!group) return;
  gsap.to(group.position, {x, duration: ANIMATION_DURATION})
}

function ModelSwitcher({scale, isMobile}) {
  let macbook14Ref= useRef();
  let macbook16Ref= useRef();

  let showMacbook14 = scale === 0.06 || scale === 0.03

  useGSAP(()=>{
    if(showMacbook14){
      fadeMeshes(macbook14Ref.current, 1)
      fadeMeshes(macbook16Ref.current, 0)
      moveGroup(macbook14Ref.current, 0)
      moveGroup(macbook16Ref.current, OFFSET_DISTANCE)
    }else{
      fadeMeshes(macbook14Ref.current, 0)
      fadeMeshes(macbook16Ref.current, 1)
      moveGroup(macbook14Ref.current, -OFFSET_DISTANCE)
      moveGroup(macbook16Ref.current, 0)
    }
  }, [scale])

  const controlsConfig = {
      snap: true,
      speed: 1,
      zoom: 1,
      azimuth: [-Infinity, Infinity],
      config: {mass:1, tension: 0, friction: 26}
  }

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={macbook14Ref}>
          <MacBook14 scale={isMobile ? 0.03 : 0.06}/>
        </group>
      </PresentationControls>
      <PresentationControls {...controlsConfig}>
        <group ref={macbook16Ref}>
          <MacBook16 scale={isMobile ? 0.05 : 0.08}/>
        </group>
      </PresentationControls>
    </>
  )
}

export default ModelSwitcher