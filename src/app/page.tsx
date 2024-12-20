import Image from "next/image"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4 py-8 text-white md:py-12">
      <div className="mx-auto my-8 w-full max-w-3xl text-center md:my-16">
        {/* Logo */}
        <div className="mb-16 flex justify-center md:mb-24">
          <img
            src="/razorheads-logo-white-outlines.svg"
            alt="Razorheads - Creators of TIK POWER"
            width="450"
            height="133"
            style={{
              width: "100%",
              maxWidth: "450px",
              height: "auto",
            }}
            className="px-6 md:px-0"
          />
        </div>

        {/* Album Cover with 3D effect */}
        <div
          className="group relative mx-auto mb-8 w-full md:mb-12"
          style={{
            maxWidth: "min(300px, 45vw)",
            perspective: "700px",
            perspectiveOrigin: "50% 0%",
          }}
        >
          <div
            className="
              relative 
              w-full 
              transform 
              transition-all
              duration-500
              hover:scale-105
              md:w-[300px]
            "
            style={{
              transformStyle: "preserve-3d",
              transform:
                "rotateX(55deg) rotateY(-5deg) rotateZ(-15deg) translateZ(50px) translateY(0px)",
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
              alt="TIK POWER Album Cover"
              width={400}
              height={400}
              className="relative h-auto w-full rounded-lg"
              style={{
                backfaceVisibility: "hidden",
                boxShadow: "0 0 30px rgba(255,255,255,0.15)",
              }}
            />
          </div>
        </div>

        {/* TIK POWER Headline */}
        <h1 className="mb-8 text-4xl font-bold tracking-wider md:mb-12 md:text-5xl lg:text-6xl">
          TIK POWER
        </h1>

        {/* Text Content */}
        <div className="mb-16 space-y-6 px-4 font-light md:space-y-8 md:px-8">
          <div className="mx-auto max-w-[600px]">
            <p className="text-base leading-relaxed text-gray-300 md:text-xl md:leading-snug lg:text-2xl">
              In 2000, we created TIK POWER as a battle cry for Timrå IK in
              their quest to reach Elitserien (now known as SHL). The song was
              our way of channeling the passion and determination of the team
              and their supporters during this historic journey.
            </p>
          </div>

          <div className="mx-auto max-w-[600px]">
            <p className="text-base leading-relaxed text-gray-300 md:text-xl md:leading-snug lg:text-2xl">
              TIK POWER became the anthem that embodied the fighting spirit of
              Timrå IK during their push for promotion. We wanted to create
              something that would energize both the players and fans, fueling
              their drive towards the highest league in Swedish hockey.
            </p>
          </div>

          <div className="mx-auto max-w-[500px] space-y-4">
            <div>
              <p className="text-base leading-relaxed text-gray-300 md:text-xl md:leading-snug lg:text-2xl font-bold">
                Keep rockin'
              </p>
              <p className="text-base leading-relaxed text-gray-300 md:text-xl md:leading-snug lg:text-2xl">
                Hassebo & Tomas
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center space-y-2 pt-4 md:flex-row md:space-x-8 md:space-y-0">
              <a
                href="mailto:hans.antonsson@razorheads.se"
                className="text-sm text-gray-300 transition-colors hover:text-white md:text-base"
              >
                hans.antonsson@razorheads.se
              </a>

              <a
                href="mailto:tomas.coox@razorheads.se"
                className="text-sm text-gray-300 transition-colors hover:text-white md:text-base"
              >
                tomas.coox@razorheads.se
              </a>
            </div>
          </div>
        </div>

        {/* Spotify Player */}
        <div className="mx-auto mb-16 w-full max-w-3xl px-4">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/14lY9QyGnlZnGcHypqx0D6?utm_source=generator&theme=0"
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  )
}
