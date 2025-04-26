import connection from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { username, email, password } = await request.json();

  try {
    await connection();

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });


    return NextResponse.json(
      { message: "User created successfully", success: true, user: {
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        profile_picture: newUser.profile_picture,
        cover_photo: newUser.cover_photo,
        bio: newUser.bio
      } },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
