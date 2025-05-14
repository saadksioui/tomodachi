"use client";

import AnimeCard from "@/app/_components/AnimeCard";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const AnimePage = () => {
  const params = useParams<{ title: string }>();
  const [anime, setAnime] = useState([]);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        const res = await axios.get(`/api/anime/get-anime-info?title=${params.title}`);
        setAnime(res.data);
      } catch (err) {
        console.error("Error fetching anime:", err);
      }
    };

    if (params.title) {
      fetchAnime();
    }
  }, [params.title]);

  return (
    <div>
      {anime.length > 0 ? (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-6">
          {anime.map((a: any) => (
            <AnimeCard key={a.id || a.mal_id} anime={a} />
          ))}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AnimePage;
