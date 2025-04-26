import connection from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  await connection();

  const user = await User.findById(id).select('-password');

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }


  return NextResponse.json(user, { status: 200 });
}
