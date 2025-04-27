import axios from "axios";

export async function getAnime() {
  const response = await axios.get(`https://animedb1.p.rapidapi.com/top/anime`, {
    headers: {
      'x-rapidapi-key': '7606b5b642mshc2e28474faed74ep1e18a5jsn45a97008c9f5',
      'x-rapidapi-host': 'animedb1.p.rapidapi.com'
    }
  });
  const data = response.data;
  return data;
}

export async function getManga() {
  const response = await axios.get(`https://animedb1.p.rapidapi.com/top/manga`, {
    headers: {
      'x-rapidapi-key': '7606b5b642mshc2e28474faed74ep1e18a5jsn45a97008c9f5',
      'x-rapidapi-host': 'animedb1.p.rapidapi.com'
    }
  });
  const data = response.data;
  return data;
}

export async function searchAnime(keyword: string) {
  const response = await axios.get(`https://animedb-apis.p.rapidapi.com/anime`, {
    headers: {
      "X-RapidAPI-Key": process.env.RAPIDAPI_KEY!,
      "X-RapidAPI-Host": "animedb-apis.p.rapidapi.com",
    },
    params:{
      q: keyword
    }
  });
  const data = response.data;
  return data;
}