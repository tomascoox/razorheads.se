import Image from "next/image"
import AlbumCover from "@/components/AlbumCover"
import SpotifyPlayer from "@/components/SpotifyPlayer"

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
        <div className="mb-14 flex justify-center md:mb-24">
          <div className="relative aspect-[570/133] w-full max-w-[570px] px-6 md:px-0">
            <Image
              src="https://res.cloudinary.com/dj3cyyuz7/image/upload/f_auto,q_auto,w_400/v1734717848/razorheads-logo-white_xepvsy.png"
              alt="Razorheads logotyp - Skaparna av TIK POWER"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 85vw, (max-width: 768px) 570px, 570px"
              quality={85}
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Album Cover with 3D effect */}
        <AlbumCover />

        {/* TIK POWER Headline */}
        <div className="mb-8 md:mb-12">
          <div className="relative mx-auto aspect-[600/120] w-full max-w-[600px]">
            <Image
              src="https://res.cloudinary.com/dj3cyyuz7/image/upload/f_auto,q_auto,w_400/v1734775013/TIK_POWER_xac6hs.png"
              alt="TIK POWER logotyp"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 640px) 85vw, (max-width: 768px) 600px, 600px"
              quality={85}
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="mb-16 space-y-6 px-4 font-medium md:space-y-8 md:px-8">
          <div className="mx-auto max-w-[600px]">
            <p className="text-base leading-tight text-gray-200 md:text-lg md:leading-tight">
              För {yearsSince()} år sedan i februari 2000 skapade vi TIK POWER
              som ett stridsrop för Timrå IK i deras kamp för att nå Elitserien
              (numera SHL). Låten var vårt sätt att kanalisera passionen och
              beslutsamheten hos laget och deras supportrar under denna
              historiska resa.
            </p>
          </div>

          <div className="mx-auto max-w-[600px]">
            <p className="text-base leading-tight text-gray-200 md:text-lg md:leading-tight">
              TIK POWER blev hymnen som förkroppsligade Timrå IK:s kämparanda
              under deras väg mot avancemang. Vi ville skapa något som skulle ge
              energi åt både spelarna och fansen, och driva dem framåt mot den
              högsta ligan i svensk hockey.
            </p>
          </div>

          <div className="mx-auto max-w-[500px] space-y-4">
            <div>
              <p className="text-base font-bold leading-tight text-gray-200 md:text-lg md:leading-tight">
                Rock on
              </p>
              <p className="text-base leading-tight text-gray-200 md:text-lg md:leading-tight">
                Hassebo & Tomas
              </p>
            </div>
          </div>
        </div>

        {/* Band Members Image - Optimize for mobile */}
        <div className="mx-auto mb-24 mt-24 max-w-[600px] px-4">
          <div className="relative aspect-[550/333] w-full">
            <Image
              src="https://res.cloudinary.com/dj3cyyuz7/image/upload/f_auto,q_auto,w_400/v1734703780/the_guys_fbbwx8.jpg"
              alt="Razorheads bandmedlemmar: Tomas Coox, Markus Nordenberg och Hans Antonsson"
              fill
              className="rounded-lg object-cover"
              loading="lazy"
              sizes="(max-width: 640px) 85vw, (max-width: 768px) 550px, 550px"
              quality={85}
            />
          </div>
          <div className="mt-2 grid grid-cols-3 text-center text-sm text-gray-200">
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
            <div>
              <div className="font-medium leading-normal">Hans Antonsson</div>
              <div className="text-base font-medium leading-tight text-gray-400 md:text-lg md:leading-tight">
                hans.antonsson@razorheads.se
              </div>
            </div>
            <div>
              <div className="font-medium leading-normal">Tomas Coox</div>
              <div className="text-base font-medium leading-tight text-gray-400 md:text-lg md:leading-tight">
                tomas.coox@razorheads.se
              </div>
            </div>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="https://www.facebook.com/razorheadstikpower"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="Följ oss på Facebook"
              >
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path 
                    fill="#1877F2" 
                    d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                  />
                  <path 
                    fill="#ffffff" 
                    d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                  />
                </svg>
              </a>
              <a
                href="https://open.spotify.com/artist/14lY9QyGnlZnGcHypqx0D6?si=cfXLfSfcTJGapmjmNoAg7A"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
                aria-label="Lyssna på Spotify"
              >
                <svg
                  className="h-8 w-8"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="7" fill="#1DB954"/>
                  <path
                    fill="#000"
                    d="M11.5 11.5c-.1.2-.4.2-.6.1-1.6-1-3.7-1.2-6.1-.7-.2.1-.4-.1-.5-.3-.1-.2.1-.4.3-.5 2.7-.6 5-.3 6.8.8.2.1.2.4.1.6zm.8-1.9c-.2.2-.5.3-.7.2-1.9-1.1-4.7-1.5-6.9-.8-.3.1-.6-.1-.6-.3-.1-.3.1-.6.3-.6 2.5-.7 5.7-.4 7.8.9.3.1.3.5.1.6zm.1-1.9c-2.2-1.3-5.9-1.4-8-.8-.3.1-.7-.1-.8-.4-.1-.3.1-.7.4-.8 2.4-.7 6.5-.6 9 .9.3.2.4.6.2.9-.1.2-.5.3-.8.2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Songs Section */}
        <div className="mx-auto mb-16 w-full max-w-[600px] px-4">
          <div className="rounded-lg bg-black/50 p-8 text-center">
            <h2 className="mb-6 text-2xl font-bold tracking-wide md:text-3xl">
              Låtar på skivan
            </h2>
            <div className="space-y-6 font-medium text-gray-300">
              <div className="space-y-4 text-base leading-tight md:text-lg md:leading-tight">
                <div>
                  <div className="font-medium leading-normal">
                    1. TIK POWER (4:07)
                  </div>
                  <div className="text-base font-medium leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Hans Antonsson, Tomas Coox
                  </div>
                </div>

                <div>
                  <div className="font-medium leading-normal">
                    2. TIK POWER Redline Dance Project (4:13)
                  </div>
                  <div className="text-base font-medium leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Hans Antonsson, Tomas Coox
                  </div>
                </div>

                <div>
                  <div className="font-medium leading-normal">
                    3. TIK POWER Instrumental (4:07)
                  </div>
                  <div className="text-base font-medium leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Hans Antonsson, Tomas Coox
                  </div>
                </div>

                <div>
                  <div className="font-medium leading-normal">
                    4. TIK Anthem (5:28)
                  </div>
                  <div className="text-base font-medium leading-tight text-gray-400 md:text-lg md:leading-tight">
                    Tomas Coox, Hans Antonsson
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Spotify Player */}
        <SpotifyPlayer />

        {/* Credits Section */}
        <div className="mx-auto w-full max-w-[600px] px-4">
          <div className="rounded-lg bg-black/50 p-8 text-center">
            <h2 className="mb-6 text-2xl font-bold tracking-wide md:text-3xl">
              Medverkande
            </h2>
            <div className="space-y-6 font-medium text-gray-300">
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
            <div className="space-y-6 font-medium text-gray-300">
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
