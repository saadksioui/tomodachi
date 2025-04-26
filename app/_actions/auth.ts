import { redirect } from "next/navigation";
import { deleteSession } from "../_lib/session";

export async function logout() {
  deleteSession()
  redirect('/sign-in')
}