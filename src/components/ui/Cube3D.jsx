import React from 'react';

const Cube3D = ({ size = 100, className = '' }) => {
    const halfSize = size / 2;

    const faceStyle = {
        width: size,
        height: size,
        position: 'absolute',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        background: 'rgba(255, 255, 255, 0.02)',
        backdropFilter: 'blur(2px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backfaceVisibility: 'visible', // We want to see through it
    };

    return (
        <div className={`relative perspective-1000 ${className}`} style={{ width: size, height: size }}>
            <div className="w-full h-full relative preserve-3d animate-rotate-3d">
                {/* Front */}
                <div style={{ ...faceStyle, transform: `translateZ(${halfSize}px)` }} className="bg-gradient-to-br from-white/10 to-transparent" />

                {/* Back */}
                <div style={{ ...faceStyle, transform: `rotateY(180deg) translateZ(${halfSize}px)` }} />

                {/* Right */}
                <div style={{ ...faceStyle, transform: `rotateY(90deg) translateZ(${halfSize}px)` }} className="bg-gradient-to-br from-indigo-500/10 to-transparent" />

                {/* Left */}
                <div style={{ ...faceStyle, transform: `rotateY(-90deg) translateZ(${halfSize}px)` }} />

                {/* Top */}
                <div style={{ ...faceStyle, transform: `rotateX(90deg) translateZ(${halfSize}px)` }} className="bg-gradient-to-br from-purple-500/10 to-transparent" />

                {/* Bottom */}
                <div style={{ ...faceStyle, transform: `rotateX(-90deg) translateZ(${halfSize}px)` }} />

                {/* Inner floating core */}
                <div className="absolute inset-0 m-auto w-1/2 h-1/2 bg-accent/20 rounded-full blur-xl animate-pulse"
                    style={{ transform: 'translateZ(0)' }}
                />
            </div>
        </div>
    );
};

export default Cube3D;
