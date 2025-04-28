import axios from "axios";

interface Anime {
  animeId: string;  // Use string for animeId
  title: string;
  image: string;
}

export const getAnime = async () => {
  try {
    const res = await axios.get("/api/anime");

    if (res.status === 200) {
      return res.data;
    } else {
      console.error("Error fetching anime: Invalid response status", res.status);
      return null;
    }
  } catch (error: any) {
    console.error("Error fetching anime:", error.response?.data || error.message);
    return [];
  }
};


export const addAnime = async ({ animeId, title, image }: Anime,) => {
  try {
    const res = await axios.post("/api/anime/add", { animeId, title, image });

    if (res.data.success) {
      return res.data.message
    }
  } catch (error) {
    console.error("Error adding anime:", error);
    return null;
  }
};
