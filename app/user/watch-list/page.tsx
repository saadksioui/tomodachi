"use client"
import { useEffect, useState } from "react";
import { getAnimeById } from "./actions";
import { Menu } from "lucide-react";

const status = [
  {
    value: "Watching",
    label: "Watching",
  },
  {
    value: "Completed",
    label: "Completed",
  },
  {
    value: "Want to Watch",
    label: "Want to Watch",
  }
]

const WatchList = () => {
  const [anime, setAnime] = useState<any>(null);
  const [showStatus, setShowStatus] = useState<boolean>(false);


  useEffect(() => {

    const fetchAnime = async () => {
      const animeData = await getAnimeById();
      setAnime(animeData);
    };

    fetchAnime();
  }, []);
  return (
    <div>
      <h1>Watch List</h1>
      {anime ? (
        <ul>
          {anime.map((animeItem: any, index: number) => (
            <li key={index}>
              {animeItem.title}
              <img src={animeItem.image} alt={animeItem.title} />
              <span>{animeItem.status}</span>
              <div>
                <Menu onClick={() => setShowStatus(!showStatus)}/>
                <ul className={`${showStatus ? "block" : "hidden"}`}>
                  {
                    status.map((statusItem, index) => (
                      <li key={index} className={`${statusItem.value === animeItem.status ? "text-red-500" : ""} cursor-pointer`}>{statusItem.label}</li>
                    ))
                  }
                </ul>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
};

export default WatchList
