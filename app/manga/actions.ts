import axios from "axios";

interface Manga {
  mangaId: string;
  title: string;
  image: string;
}

export const getManga = async () => {
  try {
    const res = await axios.get("/api/manga");

    if (res.status === 200) {
      return res.data;
    } else {
      console.error("Error fetching manga: Invalid response status", res.status);
      return null;
    }
  } catch (error: any) {
    console.error("Error fetching manga:", error.response?.data || error.message);
    return [];
  }
};

export const addManga = async ({ mangaId, title, image }: Manga) => {
  try {
    const res = await axios.post("http://localhost:3000/api/manga/add", {
      mangaId,
      title,
      image
    });

    if (res.status === 201 && res.data.success) {
      return res.data.message;
    } else {
      console.error("Error adding manga: Unexpected response", res.status);
      return null;
    }
  } catch (error: any) {
    console.error("Error adding manga:", error.message || error);
    return null;
  }
};
