import axios from "axios";
import { createSession } from "../_lib/session";
import { redirect } from "next/navigation";
import { FormState, loginSchema } from "@/zodSchema/login";

export async function signin(state: FormState, formData: FormData) {

  const validatedFields = loginSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password')
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { email, password } = validatedFields.data

  const res = await axios.post("/api/auth/sign-in", { email, password });
  console.log(res);


  if (!res.data.success) {
    return {
      message: 'An error occurred while creating your account.',
    }
  }

  await createSession(res.data.user._id)

  redirect('/profile')
}