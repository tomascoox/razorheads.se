import Image from "next/image"

export default function Home() {
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      minHeight: '100vh',
      margin: 0,
      padding: 0
    }}>
      <img 
        src="/razorheads-logo-white-outlines.svg"
        alt="Razorheads Logo"
        width="400"
        height="133"
        style={{ 
          maxWidth: '400px',
          height: 'auto'
        }}
      />
    </div>
  )
} 