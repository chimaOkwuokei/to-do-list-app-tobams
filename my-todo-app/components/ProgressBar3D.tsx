"use client";

import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

interface ProgressBar3DProps {
  progress: number; // A value from 0 to 10
  color: string;    // The hex or tailwind color for the bar
}

export default function ProgressBar3D({ progress, color }: ProgressBar3DProps) {
  const progressPercentage = (progress / 10) * 100;
  const barLength = 1.8; // Total length of the bar in 3D units
  const filledLength = barLength * (progressPercentage / 100);

  // Calculate position offset so it fills from left to right
  const xOffset = (barLength - filledLength) / 2;

  return (
    <div className="w-full h-8 rounded-lg overflow-hidden">
      {/* UPDATED: Added gl={{ alpha: true }} to make the canvas background transparent.
          The canvas itself will now be invisible, showing the page background.
        */}
      <Canvas gl={{ alpha: true }} camera={{ position: [0, 0, 2], fov: 50 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[1, 1, 1]} intensity={0.8} />

        {/* 1. The "glass" cup (transparent background) */}
        <Box
          args={[barLength, 0.6, 0.45]}
          position={[0, 0, 0]}
        >
          {/* UPDATED: Changed to a transparent material to act as the "glass".
              'opacity' controls how see-through it is.
            */}
          <meshStandardMaterial
            color="white"
            transparent={true}
            opacity={0.25}
          />
        </Box>

        {/* 2. The "water" (filled bar) */}
        <Box
          args={[filledLength, 0.55, 0.4]} // Keeping your larger "water" args
          position={[-xOffset, 0, 0]} // Positioned to "grow" from the left
        >
          <meshStandardMaterial color={color} />
        </Box>

        {/*controls to inspect the bar */}
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}