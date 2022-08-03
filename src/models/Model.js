import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useCursor, Image, Text } from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import { NavLink } from "react-router-dom";

// import { Link } from "react-router-dom";
const GOLDENRATIO = 1.61803398875;


const dat =
{
  CurrentEvent: ["Register Now", "/eve/Inaug", true],
  PreviousEvents: ["Explore", "/eve/PrevEvents", true], // prev - event - 3
  UpcomingEvents: ["Explore", "/eve/UpcomEvents", true],
  Community: ["Join", "/eve/Community", true],
  Spotlight: ["Explore", "/spotlight", true],
  Recruitment: ["Join Us!", "/eve/Recruits", false],
  Projects: ["Explore", "/eve/Projects", true],
  false: ["Explore", "/eve/`", false],
};

export default function Model({ images }) {
  const [vis, setVis] = useState(false);
  const [nnn, setnnn] = useState("false");

  console.log(nnn)
  return (
    <>
      <Canvas gl={{ alpha: false }} dpr={[1, 1]} camera={{ fov: 65 }}>
        <color attach="background" args={["#202023"]} />
        {/* <fog attach="fog" args={["#202023", 0, 15]} /> */}
        <group position={[0, -0.5, 1.2]}>
          <Frames images={images} fun={setVis} na={setnnn} />
        </group>
      </Canvas>
      {vis && (
        <div className="relative z-10 top-[-200px] w-full pt-10 text-center">
          {dat[nnn][2] && (
            <NavLink
              to={dat[nnn][1]}
              // target="_blank"
              // rel="noreferrer"
              // type="button"
              className="px-5 py-2 bg-slate-100 rounded-3xl text-xl shadow-inner hover:bg-[#f8a219]"
            >
              {dat[nnn][0]}
            </NavLink>
          ) }
        </div>
      )}
    </>
  );
}

function Frames({
  images,
  fun,
  na,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}) {
  const ref = useRef();
  const clicked = useRef();
  const [, params] = useRoute("/events/:id");
  const [, setLocation] = useLocation();

  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(p.set(0, GOLDENRATIO / 2, 1.25));
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, 5.5);
      q.identity();
    }
  });
  useFrame((state, dt) => {
    state.camera.position.lerp(p, THREE.MathUtils.damp(0, 1, 3, dt));
    state.camera.quaternion.slerp(q, THREE.MathUtils.damp(0, 1, 3, dt));
  });
  return (
    <>
      <group
        ref={ref}
        onClick={(e) => {
          e.stopPropagation();
          console.log(e.object);
          clicked.current === e.object ? fun(false) : fun(true);
          clicked.current === e.object ? na("false") : na(e.object.name);
          setLocation(
            clicked.current === e.object
              ? "/events"
              : "/events/" + e.object.name
          );
        }}
        onPointerMissed={() => {
          setLocation("/events");
          fun(false);
        }}
      >
        {images.map((props) => (
          <Frame key={props.url} {...props} />
        ))}
      </group>
    </>
  );
}

function Frame({img, url, tex, c = new THREE.Color(), ...props }) {
  const [hovered, hover] = useState(false);
  const image = useRef();
  const frame = useRef();
  //   const name = getUuid(url);
  const name = url;
  useCursor(hovered);
  useFrame((state) => {
    image.current.scale.x = THREE.MathUtils.lerp(
      image.current.scale.x,
      0.85 * (hovered ? 1 : 1),
      0.1
    );
    image.current.scale.y = THREE.MathUtils.lerp(
      image.current.scale.y,
      0.9 * (hovered ? 1 : 1),
      0.1
    );
    frame.current.material.color.lerp(
      c.set(hovered ? "orange" : "white").convertSRGBToLinear(),
      0.1
    );
  });
  return (
    <group {...props}>
      <mesh
        name={name}
        onPointerOver={(e) => {
          e.stopPropagation();
          hover(true);
        }}
        onPointerOut={() => hover(false)}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#151515"
          metalness={0.5}
          roughness={0.5}
          envMapIntensity={2}
        />
        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.71]}
          scale={[0.6, 0.99, 0.9]}
          url={img}
        />
      </mesh>
      <Text
        maxWidth={0.1}
        anchorX="left"
        anchorY="top"
        position={[0.55, GOLDENRATIO, 0]}
        fontSize={0.025}
      >
        {name}
      </Text>
    </group>
  );
}
