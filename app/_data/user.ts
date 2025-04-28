import axios from "axios";
import { verifySession } from "../_lib/session";

export const getUser = async () => {
  const session = await verifySession();
  if (!session) return null

  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/user/${session.userId}`);
  const user = res.data;

  return user
}