import axios from "axios";
import { verifySession } from "../_lib/session";

export const getUser = async () => {
  const session = await verifySession();
  if (!session) return null

  const baseUrl = process.env.NEXT_URL || 'http://localhost:3000';
  const res = await axios.get(`${baseUrl}/api/auth/user/${session.userId}`);
  const user = res.data;

  return user
}