import { decrypt } from "@/app/_lib/session";
import connection from "@/lib/db";
import AnimeList from "@/models/AnimeList";
import axios from "axios";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function POST(request: Request) {

  try {
    const cookie = (await cookies()).get('session')?.value

    const session = await decrypt(cookie)

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized access. Please login.' }, { status: 401 });
    }

    const userId = session.userId

    const { animeId, title, image } = await request.json();

    const res = await axios.get("https://animedb1.p.rapidapi.com/anime", {
      params: { q: title },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPI_KEY!,
        'x-rapidapi-host': 'animedb1.p.rapidapi.com'
      }
    });

    const data = res.data;

    if (data.length === 0) {
      return NextResponse.json({ error: 'Anime not found' }, { status: 404 })
    }

    await connection()

    await AnimeList.create({
      userId,
      animeId,
      title,
      image,
      addedAt: new Date()
    })

    return NextResponse.json({ message: 'Anime added successfully', success: true }, { status: 201 });

  } catch (error: any) {
    console.error('Error occurred:', error.message || error);

    if (error.response) {
      return NextResponse.json({ error: error.response.data || 'Error from external API' }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Error adding anime' }, { status: 500 });
    }
  }
}