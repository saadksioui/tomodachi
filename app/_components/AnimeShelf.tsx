"use client"
import Link from "next/link";
import AnimeCard from "./AnimeCard";
import { useEffect, useState } from "react";
import { getAnime } from "../anime/actions";

const AnimeShelf = () => {

  const [anime, setAnime] = useState([])

  useEffect(() => {
    const fetchAnime = async () => {
      const animeData = await getAnime();
      setAnime(animeData.data.slice(0, 7));
    }
    fetchAnime()
  }, [])

  return (
    <section className="w-[90%] mx-auto flex flex-col items-center justify-center gap-6 py-10">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold tracking-tight">Top Anime</h1>
        <Link href="/anime" className="text-sm underline">View All</Link>
      </div>
      <div className="w-full">
        {anime ? (
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-6">
            {anime.map((anime: any) => (
              <Link href={`/anime/${anime.title}`} key={anime.mal_id}>
                <AnimeCard anime={anime} />
              </Link>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  )
};

export default AnimeShelf
