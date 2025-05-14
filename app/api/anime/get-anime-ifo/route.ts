import axios from "axios";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title");

    if (!title) {
      return NextResponse.json({ error: "Missing query parameter 'title'" }, { status: 400 });
    }

    const anime = await axios.get("https://animedb1.p.rapidapi.com/anime", {
      params: { q: title.toString() },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
        'x-rapidapi-host': 'animedb1.p.rapidapi.com',
      },
    });

    return NextResponse.json(anime.data, { status: 200 });

  } catch (error: any) {
    console.error("Error fetching anime:", error.response?.data || error.message);
    return NextResponse.json({ error: "Failed to fetch anime" }, { status: 500 });
  }
}
