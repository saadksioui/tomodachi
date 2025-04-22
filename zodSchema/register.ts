import z from "zod";

export const registerSchema = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string().min(8)
});

export type User = z.infer<typeof registerSchema>;