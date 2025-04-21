import connection from "@/lib/db";
import User from "@/models/User";
import generateToken from "@/utils/generateToken";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  try {
    const { username, email, password } = await request.json();

    await connection();

    const user = await User.findOne({ email });
    if (user) {
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
      { message: "User created successfully",  user: {
        success: true,
        _id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        profilePic: newUser.profile_picture,
        token: generateToken(newUser._id.toString()),
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
