import Image from "next/image"

export default function Home() {
  // Calculate years since February 2000
  const yearsSince = () => {
    const today = new Date()
    const releaseDate = new Date(2000, 1) // February is 1 (0-based months)

    // Calculate years difference
    let years = today.getFullYear() - releaseDate.getFullYear()

    // If we haven't reached February yet in the current year, subtract one year
    if (
      today.getMonth() < 1 ||
      (today.getMonth() === 1 && today.getDate() < releaseDate.getDate())
    ) {
      years--
    }

    return years
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-4 py-8 text-white md:py-12">
      <div className="mx-auto my-8 w-full max-w-3xl text-center md:my-16">
        {/* Logo */}
        <div className="mb-16 flex justify-center md:mb-24">
          <img
            src="/razorheads-logo-white-outlines.svg"
            alt="Razorheads - Skaparna av TIK POWER"
            width="450"
            height="133"
            style={{
              width: "100%",
              maxWidth: "350px",
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
              alt="TIK POWER Albumomslag"
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
        <h1 className="mb-8 text-5xl font-bold tracking-wider md:mb-12 md:text-6xl lg:text-7xl">
          TIK POWER
        </h1>

        {/* Text Content */}
        <div className="mb-16 space-y-6 px-4 font-light md:space-y-8 md:px-8">
          <div className="mx-auto max-w-[600px]">
            <p className="text-base leading-tight text-gray-300 md:text-lg md:leading-tight">
              För {yearsSince()} år sedan i februari 2000 skapade vi TIK POWER
              som ett stridsrop för Timrå IK i deras kamp för att nå Elitserien
              (numera SHL). Låten var vårt sätt att kanalisera passionen och
              beslutsamheten hos laget och deras supportrar under denna
              historiska resa.
            </p>
          </div>

          <div className="mx-auto max-w-[600px]">
            <p className="text-base leading-tight text-gray-300 md:text-lg md:leading-tight">
              TIK POWER blev hymnen som förkroppsligade Timrå IK:s kämparanda
              under deras väg mot avancemang. Vi ville skapa något som skulle ge
              energi åt både spelarna och fansen, och driva dem framåt mot den
              högsta ligan i svensk hockey.
            </p>
          </div>

          <div className="mx-auto max-w-[500px] space-y-4">
            <div>
              <p className="text-base font-bold leading-tight text-gray-300 md:text-lg md:leading-tight">
                Rock on
              </p>
              <p className="text-base leading-tight text-gray-300 md:text-lg md:leading-tight">
                Hassebo & Tomas
              </p>
            </div>
          </div>
        </div>

        {/* Band Members Image */}
        <div className="mx-auto mb-24 mt-24 max-w-[500px] px-4">
          <Image
            src="https://res.cloudinary.com/dj3cyyuz7/image/upload/v1734703780/the_guys_fbbwx8.jpg"
            alt="Hans Antonsson och Tomas Coox"
            width={500}
            height={333}
            className="rounded-lg"
            priority
          />
          <div className="mt-2 grid grid-cols-3 text-center text-xs text-gray-400">
            <div>Tomas Coox</div>
            <div>Markus Nordenberg</div>
            <div>Hans Antonsson</div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mx-auto mb-16 max-w-[500px] px-4">
          <h2 className="mb-4 text-2xl font-bold tracking-wide md:text-3xl">
            Kontakta oss
          </h2>
          <div className="flex flex-col items-center justify-center gap-2">
            <span className="text-sm text-gray-300 md:text-base">
              hans.antonsson [at] razorheads.se
            </span>
            <span className="text-sm text-gray-300 md:text-base">
              tomas@joox.se
            </span>
          </div>
        </div>

        {/* Songs Section */}
        <div className="mx-auto mb-16 w-full max-w-[600px] px-4">
          <div className="rounded-lg bg-black/50 p-8 text-center">
            <h2 className="mb-6 text-2xl font-bold tracking-wide md:text-3xl">
              Låtar på skivan
            </h2>
            <div className="space-y-6 font-light text-gray-300">
              <div className="space-y-4 text-base leading-tight md:text-lg md:leading-tight">
                <div>
                  <div className="font-medium">1. TIK POWER (4:07)</div>
                  <div className="text-base leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Hans Antonsson, Tomas Coox
                  </div>
                </div>

                <div>
                  <div className="font-medium">
                    2. TIK POWER Redline Dance Project (4:13)
                  </div>
                  <div className="text-base leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Hans Antonsson, Tomas Coox
                  </div>
                </div>

                <div>
                  <div className="font-medium">
                    3. TIK POWER Instrumental (4:07)
                  </div>
                  <div className="text-base leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Hans Antonsson, Tomas Coox
                  </div>
                </div>

                <div>
                  <div className="font-medium">4. TIK Anthem (5:28)</div>
                  <div className="text-base leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Tomas Coox, Hans Antonsson
                  </div>
                </div>
              </div>
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

        {/* Credits Section */}
        <div className="mx-auto w-full max-w-[600px] px-4">
          <div className="rounded-lg bg-black/50 p-8 text-center">
            <h2 className="mb-6 text-2xl font-bold tracking-wide md:text-3xl">
              Medverkande
            </h2>
            <div className="space-y-6 font-light text-gray-300">
              <div className="space-y-4 text-base leading-tight md:text-lg md:leading-tight">
                <div>
                  <div className="font-medium">Producerad av Razorheads</div>
                  <div className="text-base leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Hans Antonsson, Tomas Coox
                  </div>
                </div>

                <div>
                  <div className="font-medium">Leadsång</div>
                  <div className="text-base leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Markus "Norton" Nordenberg
                  </div>
                </div>

                <div>
                  <div className="font-medium">Gitarrer</div>
                  <div className="text-base leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Hans Antonsson
                  </div>
                </div>

                <div>
                  <div className="font-medium">Keyboards & Synthar</div>
                  <div className="text-base leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Tomas Coox
                  </div>
                </div>

                <div>
                  <div className="font-medium">
                    Hesaste hockeykörerna i Skandinavien
                  </div>
                  <div className="text-base leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Hans Antonsson, Tomas Coox & Andreas Backlund
                  </div>
                </div>

                <div>
                  <div className="font-medium">
                    Trummor...eh, ok...trumprogrammering då!
                  </div>
                  <div className="text-base leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Björn "Hoven Droven" Höglund & Tomas Coox
                  </div>
                </div>

                <div>
                  <div className="font-medium">
                    Inspelning, Mixning & Mastering
                  </div>
                  <div className="text-base leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Tomas Coox
                  </div>
                </div>

                <div>
                  <div className="font-medium">Layout & Design av konvolut</div>
                  <div className="text-base leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Tomas Coox
                  </div>
                </div>

                <div>
                  <div className="font-medium">Webbutveckling</div>
                  <div className="text-base leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Tomas Coox
                  </div>
                </div>

                <div>
                  <div className="font-medium">Foto</div>
                  <div className="text-base leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Marcus Engström
                  </div>
                </div>

                <div className="mt-8 text-base italic leading-tight text-gray-400 md:text-lg md:leading-tight">
                  Inspelat på Studio Joox under ett antal vansinnigt roliga
                  kvällar och dagar i februari år 2000.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lyrics Section */}
        <div className="mx-auto mt-16 w-full max-w-[600px] px-4">
          <div className="rounded-lg bg-black/50 p-8 text-center">
            <h2 className="mb-6 text-2xl font-bold tracking-wide md:text-3xl">
              Låttext
            </h2>
            <div className="space-y-6 font-light text-gray-300">
              <div className="text-sm italic md:text-base">
                (Hans Antonsson, Tomas Coox)
              </div>
              <div className="space-y-6 whitespace-pre-line text-base leading-tight md:text-lg md:leading-tight">
                <div className="space-y-1">
                  <div>örnen har landat med blicken på spänn</div>
                  <div>redo för den stora drabbningen</div>
                  <div>och på andra sidan där finns vårat mål</div>
                </div>

                <div className="space-y-1">
                  <div>söker ett byte att sätta klorna i</div>
                  <div>björn eller lokatt det skiter vi i</div>
                  <div>för här finns en vilja utan stål</div>
                </div>

                <div className="space-y-1">
                  <div>nu så står dom där på isen igen</div>
                  <div>i den röda vita rustningen</div>
                  <div>det finns inga hinder, det finns inga stopp</div>
                  <div>Medelpad's stolthet, vi ger aldrig upp</div>
                </div>

                <div className="space-y-1">
                  <div>Timrå å-å-å, vi ska strida, vi ska slåss</div>
                  <div>Timrå å-å-å, ingenting kan stoppa oss</div>
                </div>

                <div className="space-y-1">
                  <div>Timrå IK det är hockeykultur</div>
                  <div>de rödvita ränderna går aldrig ur</div>
                  <div>det ska ni få se när vi bekänner färg</div>
                </div>

                <div className="space-y-1">
                  <div>våra fans finns från norr till söder</div>
                  <div>alla bär på en stolthet som glöder</div>
                  <div>och tillsammans så kan vi flytta berg</div>
                </div>

                <div className="space-y-1">
                  <div>nu så står dom där på isen igen</div>
                  <div>i den röda vita rustningen</div>
                  <div>det finns inga hinder, det finns inga stopp</div>
                  <div>Medelpad's stolthet, vi ger aldrig upp</div>
                </div>

                <div className="space-y-1">
                  <div>Timrå å-å-å, vi ska strida, vi ska slåss</div>
                  <div>Timrå å-å-å, ingenting kan stoppa oss</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
