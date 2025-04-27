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

export const updateAnimeStatus = async ({ id, status }: { id: string, status: string }) => {
  try {
    const res = await axios.put(`http://localhost:3000/api/anime/${id}`, { status });

    if (res.status === 200) {
      return res.data.message
    }
  } catch (error) {
    console.error("Error updating anime:", error);
    return [];
  }
}