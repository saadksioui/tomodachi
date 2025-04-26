import connection from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { email, password } = await request.json();

  try {
    await connection();

    const existingUser = await User.findOne({ email });

    // Check if user exists
    if (!existingUser) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Compare passwords
    const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 }
      );
    }

    // Return success
    return NextResponse.json(
      {
        message: "Login successful",
        success: true,
        user: {
          _id: existingUser._id,
          username: existingUser.username,
          email: existingUser.email,
          profile_picture: existingUser.profile_picture,
          cover_photo: existingUser.cover_photo,
          bio: existingUser.bio
        }
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
