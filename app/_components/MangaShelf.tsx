"use client"
import Link from "next/link";
import MangaCard from "./MangaCard";
import { useEffect, useState } from "react";
import { getManga } from "../manga/actions";

const MangaShelf = () => {

  const [manga, setManga] = useState([])

  useEffect(() => {
    const fetchManga = async () => {
      const mangaData = await getManga();
      setManga(mangaData.data.slice(0, 7));
    }
    fetchManga()
  }, [])

  return (
    <section className="w-[90%] mx-auto flex flex-col items-center justify-center gap-6 py-10">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-3xl font-bold tracking-tight">Top Manga</h1>
        <Link href="/manga" className="text-sm underline">View All</Link>
      </div>
      <div className="w-full">
        {manga ? (
          <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-6">
            {manga.map((manga: any) => (
              <MangaCard key={manga.mal_id} manga={manga} />
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  )
};

export default MangaShelf
