import axios from "axios";

interface Anime {
  animeId: string;  // Use string for animeId
  title: string;
  image: string;
}

export const getAnime = async () => {
  try {
    const res = await axios.get("https://animedb1.p.rapidapi.com/top/anime", {
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
        'x-rapidapi-host': 'animedb1.p.rapidapi.com'
      }
    });

    return res.data;
  } catch (error) {
    console.error("Error fetching anime:", error);
    return [];
  }
};

export const addAnime = async ({ animeId, title, image }: Anime,) => {
  try {
    const res = await axios.post("http://localhost:3000/api/anime/add", { animeId, title, image });

    if (res.data.success) {
      return res.data.message
    }
  } catch (error) {
    console.error("Error adding anime:", error);
    return null;
  }
};
