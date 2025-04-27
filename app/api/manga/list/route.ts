import { decrypt } from "@/app/_lib/session";
import MangaList from "@/models/MangaList";
import { cookies } from "next/headers";
import { connection, NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const cookie = (await cookies()).get('session')?.value

    const session = await decrypt(cookie)

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized access. Please login.' }, { status: 401 });
    }

    const userId = session.userId

    await connection()

    const mangas = await MangaList.find({ userId })

    return NextResponse.json(mangas, { status: 200 })

  } catch (error: any) {
    console.error('Error occurred:', error.message || error);

    if (error.response) {
      return NextResponse.json({ error: error.response.data || 'Error from external API' }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Error getting mangas' }, { status: 500 });
    }
  }
}