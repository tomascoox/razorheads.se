import Image from "next/image"

export default function Home() {
  return (
    <main>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          position: "relative",
        }}
      >
        <img
          src="/razorheads-logo-white-outlines.svg"
          alt="Razorheads - Creators of TIK POWER"
          width="400"
          height="133"
          style={{
            maxWidth: "400px",
            height: "auto",
          }}
        />
        {/* SEO-optimized content - visually hidden but readable by search engines */}
        <div className="sr-only">
          <h1>Razorheads - Creators of TIK POWER</h1>
          <p>
            Welcome to the official site of Razorheads, the band behind TIK
            POWER - the legendary song that celebrated Timrå IK's historic
            qualification for Elitserien (now SHL) in 2000.
          </p>
          <h2>The Story of TIK POWER</h2>
          <p>
            In 2000, when Timrå IK achieved their dream of qualifying for
            Elitserien (Sweden's highest hockey league), Razorheads created TIK
            POWER to commemorate this momentous achievement in the club's
            history.
          </p>
          <h2>Historic Hockey Moment</h2>
          <p>
            Timrå IK's qualification for Elitserien marked a significant
            milestone in Swedish hockey, and Razorheads' TIK POWER became the
            anthem that captured the spirit of this achievement.
          </p>
        </div>
      </div>
    </main>
  )
}
