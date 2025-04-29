import { writeFile } from "fs/promises";
import path from "path";
import connection from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export const config = {
  api: {
      bodyParser: false,
  },
};

export async function GET(request: Request, { params }: { params: { id: string } }) {
  await connection();
  const { id } = await params;


  const user = await User.findById(id).select('-password');

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }


  return NextResponse.json(user, { status: 200 });
}

export async function PUT(req: Request, { params }: { params: { id: string } } ) {
  await connection();
  const { id } = params;

  const formData = await req.formData();

  const username = formData.get("username") as string;
  const bio = formData.get("bio") as string;
  const profile_picture = formData.get("profile_picture") as File | null;

  if (!username || !bio) {
    return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
  }

  const user = await User.findById(id);

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  user.username = username;
  user.bio = bio;

  if (profile_picture) {
    const bytes = await profile_picture.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = Date.now() + "-" + profile_picture.name;
    const filePath = path.join(process.cwd(), "public", "uploads", fileName);

    await writeFile(filePath, buffer); // Save the image

    user.profile_picture = `/uploads/${fileName}`;
  }
  await user.save();

  return NextResponse.json(user, { status: 200 });
}

