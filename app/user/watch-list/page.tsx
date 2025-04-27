"use client"
import { useEffect, useState } from "react";
import { deleteAnime, getAnimeById, updateAnimeStatus } from "./actions";
import { Menu, Trash } from "lucide-react";

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

  const handleStatusChange = async (animeItemId: string, newStatus: string) => {
    try {
      await updateAnimeStatus({ id: animeItemId, status: newStatus });

      setAnime((prevAnime: any) =>
        prevAnime.map((item: any) =>
          item._id === animeItemId ? { ...item, status: newStatus } : item
        )
      );

      setShowStatus(false);
    } catch (error) {
      console.error("Error updating anime status:", error);
    }
  };

  const handleDelete = async (animeItemId: string) => {
    try {
      await deleteAnime({ id: animeItemId });

      setAnime((prevAnime: any) => prevAnime.filter((item: any) => item._id !== animeItemId));
    } catch (error) {
      console.error("Error deleting anime:", error);
    }
  }



  return (
    <div>
      <h1>Watch List</h1>
      {anime ? (
        <ul>
          {anime.map((animeItem: any) => (
            <li key={animeItem._id}>
              {animeItem.title}
              <img src={animeItem.image} alt={animeItem.title} />
              <span>{animeItem.status}</span>
              <div>
                <Menu onClick={() => setShowStatus(!showStatus)} />
                <ul className={`${showStatus ? "block" : "hidden"}`}>
                  {status.map((statusItem, index) => (
                    <li
                      key={index}
                      className={`${statusItem.value === animeItem.status ? "text-red-500" : ""} cursor-pointer`}
                      onClick={() => handleStatusChange(animeItem._id, statusItem.value)}
                    >
                      {statusItem.label}
                    </li>
                  ))}
                </ul>
              </div>
              <Trash onClick={() => handleDelete(animeItem._id )}/>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default WatchList;
