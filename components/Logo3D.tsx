import React, { useState } from 'react';

interface Logo3DProps {
    variant?: 'hero' | 'footer' | 'header';
    size?: number;
    className?: string;
}

const Logo3D: React.FC<Logo3DProps> = ({
    variant = 'hero',
    size,
    className = '',
}) => {
    const [isHovered, setIsHovered] = useState(false);

    // Default sizes
    const defaultSize = variant === 'hero' ? 280 : variant === 'footer' ? 100 : 50;
    const currentSize = size || defaultSize;

    return (
        <div
            className={`relative inline-block z-50 ${className}`}
            style={{
                width: variant === 'hero' ? '100%' : currentSize,
                maxWidth: variant === 'hero' ? '300px' : currentSize,
                aspectRatio: '1/1',
                cursor: 'pointer',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="relative w-full h-full transition-transform duration-500 ease-out"
                style={{
                    transform: isHovered ? 'scale(1.02)' : 'scale(1)', // Gentle lift
                }}
            >
                {/* Ambient Glow (Always present but subtle) */}
                <div
                    className="absolute inset-8 rounded-full blur-3xl transition-opacity duration-700"
                    style={{
                        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.4) 0%, transparent 70%)',
                        opacity: isHovered ? 0.8 : 0.4,
                    }}
                />

                {/* The Logo Image - Real Gold Transformation */}
                {/* Layer 1: Body */}
                <img
                    src="/images/logo-golden-3d.png"
                    alt="بن شعبن Logo"
                    className="w-full h-full object-contain absolute inset-0 z-10"
                    style={{
                        // Metallic Gold Filter Chain
                        filter: 'invert(58%) sepia(85%) saturate(368%) hue-rotate(355deg) brightness(88%) contrast(91%) drop-shadow(0 4px 0px #8B6914) drop-shadow(0 10px 20px rgba(0,0,0,0.5))',
                    }}
                />

                {/* Layer 2: Gloss/Highlights */}
                <img
                    src="/images/logo-golden-3d.png"
                    alt=""
                    className="w-full h-full object-contain absolute inset-0 z-20 mix-blend-overlay opacity-60"
                    style={{
                        filter: 'invert(100%)',
                    }}
                />

                {/* Premium Sheen Effect - Sweeping Glare */}
                <div
                    className="absolute inset-0 pointer-events-none overflow-hidden rounded-full z-30 opacity-80"
                    style={{ mixBlendMode: 'overlay' }}
                >
                    <div
                        className={`absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-white to-transparent transformSkew`}
                        style={{
                            left: '-100%',
                            transform: isHovered ? 'translateX(400%) skewX(-25deg)' : 'translateX(-100%) skewX(-25deg)',
                            transition: 'transform 0.7s ease-in-out', // Smooth sweep
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Logo3D;
