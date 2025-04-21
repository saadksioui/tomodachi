import connection from "@/lib/db";
import User from "@/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import generateToken from "@/utils/generateToken";

export const POST = async (request: Request) => {
  try {
    const {email, password} = await request.json();
    await connection();
    const user = await User.findOne({email});

    if (!user) {
      return NextResponse.json({error: "User not found"}, {status: 404});
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return NextResponse.json({error: "Invalid password"}, {status: 401});
    }

    return NextResponse.json({message: "Login successful", success: true, user, token: generateToken(user._id.toString())}, {status: 200});

  } catch (error) {
    console.log(error);
    return NextResponse.json({error: "Internal server error"}, {status: 500});
  }
}