import { NextResponse } from "next/server";
import axios from "axios";

export async function GET() {
  try {
    const res = await axios.get("https://animedb1.p.rapidapi.com/top/anime", {
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
        'x-rapidapi-host': 'animedb1.p.rapidapi.com'
      }
    });

    return NextResponse.json(res.data);
  } catch (error: any) {
    console.error("Error fetching anime:", error.response?.data || error.message);
    return NextResponse.json({ error: "Failed to fetch anime" }, { status: 500 });
  }
}
