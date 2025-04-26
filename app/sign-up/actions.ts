import axios from "axios";
import { createSession } from "../_lib/session";
import { redirect } from "next/navigation";
import { FormState, registerSchema } from "@/zodSchema/register";

export async function signup(state: FormState, formData: FormData) {

  const validatedFields = registerSchema.safeParse({
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { username, email, password } = validatedFields.data

  const res = await axios.post("/api/auth/sign-up", { username, email, password });
  console.log(res);


  if (!res.data.success) {
    return {
      message: 'An error occurred while creating your account.',
    }
  }

  await createSession(res.data.user._id)

  redirect('/profile')
}