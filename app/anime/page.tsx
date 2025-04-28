"use client"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { addAnime, getAnime } from "./actions";

const Anime = () => {
  const [anime, setAnime] = useState<any>(null);

  useEffect(() => {
    const fetchAnime = async () => {
      const animeData = await getAnime();
      setAnime(animeData);
    };

    fetchAnime();
  }, []);

  return (
    <div>
      <h1>Anime List</h1>
      {anime ? (
        <ul>
          {anime.data.map((animeItem: any) => (
            <li key={animeItem.mal_id}>
              {animeItem.title}
              <Button
                onClick={() => addAnime({
                  animeId: animeItem.mal_id.toString(),
                  title: animeItem.title,
                  image: animeItem.images.jpg.large_image_url
                })}>add</Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Anime;
