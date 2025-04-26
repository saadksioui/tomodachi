import z from "zod";

export const registerSchema = z
  .object({
    username: z.string().min(2, "Username is too short"),
    email: z.string().email("Invalid email"),
    password: z.string().min(8, "Password must be at least 8 characters"),
  })

export type FormState =
  | {
      errors?: {
        username?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;

export type FormData = z.infer<typeof registerSchema>;