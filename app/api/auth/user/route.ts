import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import User from "@/models/User";
import connection from "@/lib/db";

export const POST = async (request: Request) => {
  const body = await request.json();

}