import axios from "axios";

export const getAnimeById = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/anime/list");

    return res.data
  } catch (error) {
    console.error("Error fetching anime:", error);
    return [];
  }
}