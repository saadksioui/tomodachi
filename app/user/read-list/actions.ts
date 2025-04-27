import axios from "axios";

export const getMangaById = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/manga/list");

    return res.data
  } catch (error) {
    console.error("Error fetching manga:", error);
    return [];
  }
}

export const updateMangaStatus = async ({ id, status }: { id: string, status: string }) => {
  try {
    const res = await axios.put(`http://localhost:3000/api/manga/${id}`, { status });

    if (res.status === 200) {
      return res.data.message
    }
  } catch (error) {
    console.error("Error updating manga:", error);
    return [];
  }
}

export const deleteManga = async ({ id }: { id: string }) => {
  try {
    const res = await axios.delete(`http://localhost:3000/api/manga/${id}`)

    if (res.status === 200) {
      return res.data.message
    }
  } catch (error) {
    console.error("Error deleting manga:", error);
    return null;
  }
};