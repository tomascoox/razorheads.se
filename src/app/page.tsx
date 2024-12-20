import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center">
      <div className="max-w-3xl mx-auto text-center px-4">
        <img
          src="/razorheads-logo-white-outlines.svg"
          alt="Razorheads - Creators of TIK POWER"
          width="400"
          height="133"
          style={{
            maxWidth: "400px",
            height: "auto",
            margin: "0 auto 4rem",
          }}
        />
        
        <div className="space-y-8 font-light">
          <div>
            <h1 className="text-3xl font-bold mb-4">TIK POWER</h1>
            <p className="text-lg leading-relaxed text-gray-300">
              In 2000, we created TIK POWER as a battle cry for Timrå IK in their quest 
              to reach Elitserien (now known as SHL). The song was our way of channeling 
              the passion and determination of the team and their supporters during this 
              historic journey.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">The Story</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              TIK POWER became the anthem that embodied the fighting spirit of Timrå IK 
              during their push for promotion. We wanted to create something that would 
              energize both the players and fans, fueling their drive towards the highest 
              league in Swedish hockey.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-3">The Achievement</h2>
            <p className="text-lg leading-relaxed text-gray-300">
              The energy and determination of the team, backed by the passionate 
              supporters and the thundering sound of TIK POWER, culminated in one of 
              the most significant moments in the club's history - their qualification 
              for Elitserien. The song remains a testament to that incredible season 
              and the unbreakable spirit of Timrå IK.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
