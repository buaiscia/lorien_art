import { Link } from 'react-router-dom'

import bgPoster from '../assets/background.jpg'
import ruzneImg from '../assets/madera_ruzne.jpg'
import ceramicsImg from '../assets/ceramics.jpg'
import glassImg from '../assets/glass_homepage.jpg'
import harpImg from '../assets/harp.png'
import hennaImg from '../assets/henna.jpg'

type TileProps = {
  title: string
  to: string
  img: string
  alt: string
  className?: string
}

function Tile({ title, to, img, alt, className = '' }: TileProps) {
  return (
    <Link
      to={to}
      className={`group relative overflow-hidden rounded-xl ${className}`}
    >
      <img
        src={img}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
      <p className="absolute bottom-0 left-0 right-0 p-5 font-serif text-2xl text-white drop-shadow-lg lg:text-3xl">
        {title}
      </p>
    </Link>
  )
}

export function HomePage() {
  return (
    <section className="relative min-h-[calc(100svh-90px)]">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/background_video.mp4"
        poster={bgPoster}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />

      {/* Dark overlay so tiles are legible */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Tiles container
          Mobile:  normal flow, scrollable via the page, centred with py
          Desktop: absolute centred over the video */}
      <div className="relative py-8 px-4 flex justify-center lg:absolute lg:inset-0 lg:flex lg:items-center lg:justify-center lg:p-12">
        <div
          className="
            w-full max-w-5xl rounded-2xl
            bg-white/10 backdrop-blur-sm ring-1 ring-white/20
            p-2 gap-2
            grid grid-cols-1
            lg:grid-cols-[420px_1fr] lg:grid-rows-[1fr_1fr] lg:h-[600px]
          "
        >
          {/* Harp — left column, spans both rows on desktop */}
          <Tile
            title="Harfa"
            to="/harfa"
            img={harpImg}
            alt="Harpistka"
            className="h-44 lg:row-span-2 lg:h-auto"
          />
          {/* Ceramics — top-right */}
          <Tile
            title="Keramika"
            to="/keramika"
            img={ceramicsImg}
            alt="Keramika"
            className="h-44 lg:h-auto"
          />
          {/* Other services — bottom-right, split into 3 mini columns */}
          <div className="grid grid-cols-3 gap-2 h-44 lg:h-auto">
            <Tile
              title="Henna"
              to="/henna"
              img={hennaImg}
              alt="Henna"
            />
            <Tile
              title="Malování"
              to="/malovani"
              img={glassImg}
              alt="Malování"
            />
            <Tile
              title="Různé"
              to="/ruzne"
              img={ruzneImg}
              alt="Různé"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
