'use client'

import Image from "next/image"
import { useEffect, useState } from 'react'

export default function AlbumCover() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div
      className="group relative mx-auto mb-6 w-full md:mb-24"
      style={{
        maxWidth: "min(400px, 55vw)",
        perspective: isMobile ? 'none' : "1000px",
        perspectiveOrigin: "50% 0%",
      }}
    >
      <div
        className={`
          relative 
          w-full 
          transform 
          ${isMobile ? 'hover:scale-105 transition-transform' : 'animate-album-rotate'}
          will-change-transform
          md:w-[400px]
        `}
        style={{
          transformStyle: isMobile ? 'flat' : "preserve-3d",
        }}
      >
        {!isMobile && (
          <div
            className="absolute inset-0 rounded-lg"
            style={{
              background:
                "radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 80%)",
              filter: "blur(15px)",
              transform: "translateZ(-1px) scale(2)",
            }}
          />
        )}
        <div className="relative aspect-square w-full">
          <Image
            src="https://res.cloudinary.com/dj3cyyuz7/image/upload/f_auto,q_auto,w_500/v1734685679/TIK_POWER_album_cover_znk9eh.jpg"
            alt="TIK POWER Albumomslag - Razorheads"
            fill
            className="rounded-lg object-cover"
            priority
            sizes="(max-width: 640px) 90vw, (max-width: 768px) 400px, 400px"
            quality={90}
            fetchPriority="high"
            style={{
              backfaceVisibility: "hidden",
              boxShadow: "0 0 30px rgba(255,255,255,0.15)",
              willChange: "transform",
            }}
          />
        </div>
      </div>
    </div>
  )
} 