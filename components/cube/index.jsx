'use client';
import React, { useRef, useEffect } from 'react'
import styles from "./style.module.scss";
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls, ScrollControls, useScroll } from '@react-three/drei';
import { useMotionValue, useSpring } from "framer-motion";
import { motion } from "framer-motion-3d";

export default function useCube() {
    const container = useRef(null)

    return (
        <div ref={container} className={styles.main}>
            <h1 className={styles.fixedTitle}>NEXT.JS / THREEJS / FRAMER / SASS</h1>
            <Canvas>
                <ScrollControls damping={0.1}>
                    <OrbitControls enableZoom={true} enablePan={false} />
                    <ambientLight intensity={2} />
                    <directionalLight position={[2, 1, 1]} />
                    <Cube />
                </ScrollControls>
            </Canvas>
        </div>
    )
}

function Cube() {

    const mesh = useRef(null)
    // const data = useScroll()
    // useFrame((state, delta) => {
    //     const { offset } = data
    //     mesh.current.rotation.x += offset * 5;
    //     mesh.current.rotation.y += offset * 5;
    //     mesh.current.rotation.z += offset * 5;
    // })

    // const option = {
    //     damping: 20
    // }

    // const mouse = {
    //     x: useSpring(useMotionValue(0), option),
    //     y: useSpring(useMotionValue(0), option)
    // }

    // const manageMouseMove = (e) => {
    //     const { innerWidth, innerHeight } = window;
    //     const { clientX, clientY } = e;
    //     const x = -0.5 + (clientX / innerWidth)
    //     const y = -0.5 + (clientY / innerHeight)
    //     mouse.x.set(x)
    //     mouse.y.set(y)
    // }


    // useEffect(() => {
    //     window.addEventListener("mousemove", manageMouseMove)

    //     return () => window.removeEventListener("mouse", manageMouseMove)
    // }, []);

    const texture_1 = useLoader(TextureLoader, "/assets/image_1.jpeg")
    const texture_2 = useLoader(TextureLoader, "/assets/image_2.jpeg")
    const texture_3 = useLoader(TextureLoader, "/assets/image_3.jpeg")
    const texture_4 = useLoader(TextureLoader, "/assets/image_4.jpeg")
    const texture_5 = useLoader(TextureLoader, "/assets/image_5.jpeg")
    const texture_6 = useLoader(TextureLoader, "/assets/image_6.jpeg")

    return (
        <motion.mesh ref={mesh}>
            <boxGeometry args={[2.5, 2.5, 2.5]} />
            <meshStandardMaterial map={texture_1} attach={"material-0"} />
            <meshStandardMaterial map={texture_2} attach={"material-1"} />
            <meshStandardMaterial map={texture_3} attach={"material-2"} />
            <meshStandardMaterial map={texture_4} attach={"material-3"} />
            <meshStandardMaterial map={texture_5} attach={"material-4"} />
            <meshStandardMaterial map={texture_6} attach={"material-5"} />
        </motion.mesh>
    )
}
