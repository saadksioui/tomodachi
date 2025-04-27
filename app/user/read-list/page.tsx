"use client"
import { useEffect, useState } from "react";
import { deleteManga, getMangaById, updateMangaStatus } from "./actions";
import { Menu, Trash } from "lucide-react";

const status = [
  {
    value: "Reading",
    label: "Reading",
  },
  {
    value: "Completed",
    label: "Completed",
  },
  {
    value: "Want to Read",
    label: "Want to Read",
  }
]

const ReadList = () => {
  const [manga, setManga] = useState<any>(null);
  const [showStatus, setShowStatus] = useState<boolean>(false);

  useEffect(() => {
    const fetchManga = async () => {
      const mangaData = await getMangaById();
      setManga(mangaData);
    };

    fetchManga();
  }, []);

  const handleStatusChange = async (mangaItemId: string, newStatus: string) => {
    try {
      await updateMangaStatus({ id: mangaItemId, status: newStatus });

      setManga((prevManga: any) =>
        prevManga.map((item: any) =>
          item._id === mangaItemId ? { ...item, status: newStatus } : item
        )
      );

      setShowStatus(false);
    } catch (error) {
      console.error("Error updating manga status:", error);
    }
  };

  const handleDelete = async (mangaItemId: string) => {
    try {
      await deleteManga({ id: mangaItemId });

      setManga((prevManga: any) => prevManga.filter((item: any) => item._id !== mangaItemId));
    } catch (error) {
      console.error("Error deleting manga:", error);
    }
  }

  return (
    <div>
      <h1>Read List</h1>
      {manga ? (
        <ul>
          {manga.map((mangaItem: any) => (
            <li key={mangaItem._id}>
              {mangaItem.title}
              <img src={mangaItem.image} alt={mangaItem.title} />
              <span>{mangaItem.status}</span>
              <div>
                <Menu onClick={() => setShowStatus(!showStatus)} />
                <ul className={`${showStatus ? "block" : "hidden"}`}>
                  {status.map((statusItem, index) => (
                    <li
                      key={index}
                      className={`${statusItem.value === mangaItem.status ? "text-red-500" : ""} cursor-pointer`}
                      onClick={() => handleStatusChange(mangaItem._id, statusItem.value)}
                    >
                      {statusItem.label}
                    </li>
                  ))}
                </ul>
              </div>
              <Trash onClick={() => handleDelete(mangaItem._id)} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
};

export default ReadList
