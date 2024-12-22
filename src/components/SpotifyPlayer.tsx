'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

// Separate the iframe into its own component for code splitting
const SpotifyIframe = dynamic(() => Promise.resolve(({ isVisible }: { isVisible: boolean }) => (
  <iframe
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: "12px",
      opacity: isVisible ? 1 : 0,
    }}
    src={isVisible ? "https://open.spotify.com/embed/artist/14lY9QyGnlZnGcHypqx0D6?utm_source=generator&theme=0" : "about:blank"}
    frameBorder="0"
    allowFullScreen
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    loading="lazy"
    title="Razorheads på Spotify"
    className="transition-opacity duration-300"
  />
)), { ssr: false })

export default function SpotifyPlayer() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!window.IntersectionObserver) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="mx-auto mb-16 w-full max-w-3xl px-4">
      <div ref={containerRef} className="relative w-full" style={{ height: '352px' }}>
        <SpotifyIframe isVisible={isVisible} />
      </div>
    </div>
  )
} 