import { decrypt } from "@/app/_lib/session";
import connection from "@/lib/db";
import AnimeList from "@/models/AnimeList";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


export async function PUT (request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const cookie = (await cookies()).get('session')?.value

    const session = await decrypt(cookie)

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized access. Please login.' }, { status: 401 });
    }

    await connection();

    const anime = await AnimeList.findById({_id: id});

    if (!anime) {
      return NextResponse.json({ error: 'Anime not found' }, { status: 404 });
    }

    const { status } = await request.json();

    await AnimeList.updateOne({ _id: id }, { status });

    return NextResponse.json({ message: 'Anime updated successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error occurred:', error.message || error);

    if (error.response) {
      return NextResponse.json({ error: error.response.data || 'Error from external API' }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Error updating anime' }, { status: 500 });
    }
  }
}

export async function DELETE (request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const cookie = (await cookies()).get('session')?.value

    const session = await decrypt(cookie)

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized access. Please login.' }, { status: 401 });
    }

    await connection();

    const anime = await AnimeList.findById({_id: id});

    if (!anime) {
      return NextResponse.json({ error: 'Anime not found' }, { status: 404 });
    }

    await AnimeList.deleteOne({ _id: id });

    return NextResponse.json({ message: 'Anime deleted successfully' }, { status: 200 });

  } catch (error: any) {
    console.error('Error occurred:', error.message || error);

    if (error.response) {
      return NextResponse.json({ error: error.response.data || 'Error from external API' }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Error deleting anime' }, { status: 500 });
    }
  }
}