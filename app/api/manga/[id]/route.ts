import { decrypt } from "@/app/_lib/session";
import connection from "@/lib/db";
import MangaList from "@/models/MangaList";
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

    const manga = await MangaList.findById({_id: id});

    if (!manga) {
      return NextResponse.json({ error: 'Manga not found' }, { status: 404 });
    }

    const { status } = await request.json();

    await MangaList.updateOne({ _id: id }, { status });

    return NextResponse.json({ message: 'Manga updated successfully' }, { status: 200 });
  } catch (error: any) {
    console.error('Error occurred:', error.message || error);

    if (error.response) {
      return NextResponse.json({ error: error.response.data || 'Error from external API' }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Error updating manga' }, { status: 500 });
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

    const manga = await MangaList.findById({_id: id});

    if (!manga) {
      return NextResponse.json({ error: 'Manga not found' }, { status: 404 });
    }

    await MangaList.deleteOne({ _id: id });

    return NextResponse.json({ message: 'Manga deleted successfully' }, { status: 200 });

  } catch (error: any) {
    console.error('Error occurred:', error.message || error);

    if (error.response) {
      return NextResponse.json({ error: error.response.data || 'Error from external API' }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'Error deleting manga' }, { status: 500 });
    }
  }
}