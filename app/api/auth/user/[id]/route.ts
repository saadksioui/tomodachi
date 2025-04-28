import { IncomingForm } from "formidable";
import { rename, writeFile } from "fs/promises";
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
  const { id } = params;

  await connection();

  const user = await User.findById(id).select('-password');

  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }


  return NextResponse.json(user, { status: 200 });
}

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = await params;
  await connection();

  const form = new IncomingForm({
    keepExtensions: true,
    uploadDir: './public/uploads',
    multiples: false,
  });

  return new Promise((resolve, reject) => {
    form.parse(req as any, async (err, fields, files) => {
      if (err) {
        console.error('Form parse error:', err);
        reject(NextResponse.json({ error: "Form parsing error" }, { status: 400 }));
        return;
      }

      try {
        const { username, bio } = fields;
        const user = await User.findById(id);

        if (!user) {
          resolve(NextResponse.json({ error: "User not found" }, { status: 404 }));
          return;
        }

        user.username = username || user.username;
        user.bio = bio || user.bio;

        if (files.profile_picture) {
          const profile_picture = Array.isArray(files.profile_picture)
            ? files.profile_picture[0]
            : files.profile_picture;

          const originalFilename = profile_picture.originalFilename || "profile-picture.png";
          const newFileName = `${Date.now()}-${originalFilename}`;
          const oldPath = profile_picture.filepath;
          const newPath = path.join(process.cwd(), "public/uploads", newFileName);

          await rename(oldPath, newPath);

          user.profile_picture = `/uploads/${newFileName}`;
        }

        await user.save();

        resolve(NextResponse.json(user, { status: 200 }));
      } catch (error) {
        console.error('Update profile error:', error);
        reject(NextResponse.json({ error: "Error updating profile" }, { status: 500 }));
      }
    });
  });
}

