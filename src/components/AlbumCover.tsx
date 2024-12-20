'use client'

import Image from "next/image"

export default function AlbumCover() {
  return (
    <div
      className="group relative mx-auto mb-16 w-full md:mb-24"
      style={{
        maxWidth: "min(400px, 55vw)",
        perspective: "1000px",
        perspectiveOrigin: "50% 0%",
      }}
    >
      <div
        className="
          relative 
          w-full 
          transform 
          transition-all
          duration-700
          ease-in-out
          hover:scale-105
          md:w-[400px]
        "
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateX(55deg) rotateY(-5deg) rotateZ(-15deg) translateZ(50px)",
        }}
        onMouseEnter={(e) => {
          const target = e.currentTarget;
          target.style.transform = "rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(0px)";
        }}
        onMouseLeave={(e) => {
          const target = e.currentTarget;
          target.style.transform = "rotateX(55deg) rotateY(-5deg) rotateZ(-15deg) translateZ(50px)";
        }}
      >
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background:
              "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 80%)",
            filter: "blur(15px)",
            transform: "translateZ(-1px) scale(2)",
          }}
        />
        <Image
          src="https://res.cloudinary.com/dj3cyyuz7/image/upload/v1734685679/TIK_POWER_album_cover_znk9eh.jpg"
          alt="TIK POWER Albumomslag"
          width={500}
          height={500}
          className="relative h-auto w-full rounded-lg"
          style={{
            backfaceVisibility: "hidden",
            boxShadow: "0 0 30px rgba(255,255,255,0.15)",
          }}
        />
      </div>
    </div>
  )
} 