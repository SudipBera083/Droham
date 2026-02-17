import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Text, Trail, MeshTransmissionMaterial, Environment, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom, Noise, Vignette } from "@react-three/postprocessing";
import { motion } from "framer-motion";
import clsx from "clsx";
import * as THREE from "three";

const FloatingShape = ({ position, color, speed, scale = 1 }) => {
    const meshRef = useRef();

    useFrame((state) => {
        meshRef.current.rotation.x = state.clock.getElapsedTime() * speed;
        meshRef.current.rotation.y = state.clock.getElapsedTime() * (speed * 0.5);
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={meshRef} position={position} scale={scale}>
                <icosahedronGeometry args={[1, 0]} />
                <MeshTransmissionMaterial
                    backside
                    backsideThickness={5}
                    thickness={2}
                    roughness={0}
                    transmission={1}
                    ior={1.5}
                    chromaticAberration={0.2} // High chromatic aberration for premium glass look
                    anisotropy={1}
                    distortion={1}
                    distortionScale={0.5}
                    temporalDistortion={0.2}
                    color={color}
                    background={new THREE.Color('#030305')}
                />
            </mesh>
        </Float>
    );
};

const Scene = () => {
    return (
        <>
            <Environment preset="city" />
            <ambientLight intensity={0.2} />
            <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={5} color="#EC4899" />
            <pointLight position={[0, 0, 5]} intensity={2} color="#4F46E5" />

            <Sparkles count={200} scale={12} size={2} speed={0.4} opacity={0.5} color="#ffffff" />

            <FloatingShape position={[2.5, 0, 0]} color="#4F46E5" speed={0.2} scale={1.2} />
            <FloatingShape position={[-2.5, 1.5, -2]} color="#EC4899" speed={0.3} scale={0.8} />
            <FloatingShape position={[0, -2.5, -1]} color="#8B5CF6" speed={0.15} scale={1} />

            <EffectComposer disableNormalPass>
                <Bloom luminanceThreshold={0.5} mipmapBlur intensity={1.5} radius={0.6} />
                <Noise opacity={0.05} />
                <Vignette eskil={false} offset={0.1} darkness={0.5} />
            </EffectComposer>
        </>
    );
};

const Hero3D = () => {
    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-background">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 6], fov: 45 }} gl={{ antialias: false }}>
                    <Scene />
                </Canvas>
            </div>

            {/* Overlay Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }} // Heavy premium ease
                    className="pointer-events-auto"
                >
                    <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-2xl shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                        </span>
                        <span className="text-sm font-medium text-gray-300 tracking-wide uppercase text-[10px]">System Online v2.0</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-[0.9] tracking-tighter mix-blend-overlay">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-600 drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                            LIMITLESS
                        </span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-500 to-pink-500 bg-300% animate-gradient drop-shadow-[0_0_50px_rgba(79,70,229,0.4)]">
                            VELOCITY
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-secondary/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light tracking-wide">
                        The ERP platform for those who reshape industries. <br />
                        <span className="text-white font-medium">Precision engineered for scale.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <button className="group relative px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] overflow-hidden">
                            <span className="relative z-10">Start building</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </button>
                        <button className="group px-8 py-4 bg-white/5 text-white font-medium rounded-full hover:bg-white/10 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-white/20">
                            <span className="group-hover:tracking-wider transition-all duration-300">Book Demo</span>
                        </button>
                    </div>
                </motion.div>
            </div>

            {/* Bottom fade */}
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent z-10 pointer-events-none" />
        </div>
    );
};

export default Hero3D;
