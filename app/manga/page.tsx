"use client"
import { useEffect, useState } from "react";
import { addManga, getManga } from "./actions";
import { Button } from "@/components/ui/button";

const Manga = () => {
  const [manga, setManga] = useState<any>(null);

  useEffect(() => {

    const fetchManga = async () => {
      const mangaData = await getManga();
      setManga(mangaData);
    };

    fetchManga();
  }, []);
  return (
    <div>
      Manga
      {manga ? (
        <ul>
          {manga.data.map((mangaItem: any) => (
            <li key={mangaItem.mal_id}>
              {mangaItem.title}
              <Button
                onClick={() => addManga({
                  mangaId: mangaItem.mal_id.toString(),
                  title: mangaItem.title,
                  image: mangaItem.images.jpg.large_image_url
                })}>add</Button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
};

export default Manga
