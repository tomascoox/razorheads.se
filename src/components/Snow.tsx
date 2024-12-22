'use client'

import { useEffect, useCallback } from 'react'

interface Snowflake extends HTMLDivElement {
  sink: number
  posX: number
  posY: number
}

export default function Snow() {
  // Check if current date is within snow period
  const isSnowSeason = () => {
    const today = new Date()
    const month = today.getMonth() // 0-based (0 = January, 11 = December)
    
    // Show snow in December (11) and January (0)
    return month === 11 || month === 0
  }

  // If it's not snow season, don't render anything
  if (!isSnowSeason()) {
    return null
  }

  // Configuration
  const snowMax = 35
  const snowColor = ["#DDD", "#EEE"]
  const snowEntity = "•"
  const snowSpeed = 0.75
  const snowMinSize = 8
  const snowMaxSize = 24
  const snowRefresh = 50

  const generateSnowflakes = useCallback(() => {
    const flakes = []
    for (let i = 0; i <= snowMax; i++) {
      flakes.push(
        <div
          key={i}
          id={`flake${i}`}
          style={{
            position: 'fixed',
            cursor: 'default',
            userSelect: 'none',
            top: '-' + snowMaxSize + 'px',
            zIndex: 1000,
            color: snowColor[Math.floor(Math.random() * snowColor.length)],
            fontSize: (Math.random() * (snowMaxSize - snowMinSize) + snowMinSize) + 'px',
          }}
        >
          {snowEntity}
        </div>
      )
    }
    return flakes
  }, [])

  useEffect(() => {
    // Don't initialize snow if it's not the season
    if (!isSnowSeason()) {
      return
    }

    const snow: (Snowflake | null)[] = []
    const pos: number[] = []
    const coords: number[] = []
    const lefr: number[] = []
    let marginBottom: number = document.documentElement.scrollHeight - 5
    let marginRight: number = document.documentElement.clientWidth - 15

    function randomize(range: number): number {
      return Math.floor(range * Math.random())
    }

    function initSnow() {
      marginBottom = document.documentElement.scrollHeight - 5
      marginRight = document.documentElement.clientWidth - 15

      for (let i = 0; i <= snowMax; i++) {
        coords[i] = 0
        lefr[i] = Math.random() * 15
        pos[i] = 0.03 + Math.random() / 10
        const element = document.getElementById("flake" + i) as Snowflake | null
        snow[i] = element
        
        const currentSnow = snow[i]
        if (currentSnow) {
          const size = randomize(snowMaxSize - snowMinSize) + snowMinSize
          currentSnow.style.fontSize = size + "px"
          currentSnow.style.color = snowColor[randomize(snowColor.length)]
          currentSnow.sink = snowSpeed * size / 5
          currentSnow.posX = randomize(marginRight - size)
          currentSnow.posY = randomize(2 * marginBottom - marginBottom - 2 * size)
          currentSnow.style.left = currentSnow.posX + "px"
          currentSnow.style.top = currentSnow.posY + "px"
        }
      }

      moveSnow()
    }

    function moveSnow() {
      for (let i = 0; i <= snowMax; i++) {
        coords[i] += pos[i]
        const currentSnow = snow[i]
        if (currentSnow) {
          currentSnow.posY += currentSnow.sink
          currentSnow.style.left = currentSnow.posX + lefr[i] * Math.sin(coords[i]) + "px"
          currentSnow.style.top = currentSnow.posY + "px"

          const size = parseInt(currentSnow.style.fontSize)
          if (currentSnow.posY >= marginBottom - 2 * size ||
              parseInt(currentSnow.style.left) > (marginRight - 3 * lefr[i])) {
            currentSnow.posX = randomize(marginRight - size)
            currentSnow.posY = -size
          }
        }
      }
    }

    function resize() {
      marginBottom = document.documentElement.scrollHeight - 5
      marginRight = document.documentElement.clientWidth - 15
    }

    // Initialize snow
    window.addEventListener('resize', resize)
    initSnow()

    // Set up the animation interval
    const snowInterval = setInterval(() => moveSnow(), snowRefresh)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize)
      clearInterval(snowInterval)
    }
  }, [])

  return <>{generateSnowflakes()}</>
} 