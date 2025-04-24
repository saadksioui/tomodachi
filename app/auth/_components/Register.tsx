"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/zodSchema/register";
import axios from "axios";
import toast from "react-hot-toast";
import * as z from "zod";

type FormData = z.infer<typeof registerSchema>;

const Register = () => {
  const navigate = useRouter();
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>({
      resolver: zodResolver(registerSchema),
    });

    const handleRegister = async (data: {username: string; email: string; password: string; }) => {
      const { username, email, password } = data;

      try {
        const response = await axios.post(`/api/auth/register`, { username, email, password });
        if (response.data.success) {
          toast.success("Register successful!");
          console.log(response.data.message);

          navigate.push("/sign-in")
        } else {
          toast.error(response.data.message || "Register failed. Please try again.");
        }

      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again.");
      }

    };

  return (
    <form onSubmit={handleSubmit(handleRegister)}>
      <div className="space-y-1">
        <Label htmlFor="username">Username</Label>
        <Input
        id="username"
        type="username"
        placeholder="peduarte@gmail.com"
        {...register('username', {
          required: 'Username is required',
        })}/>
        {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="email">Email</Label>
        <Input
        id="email"
        type="email"
        placeholder="peduarte@gmail.com"
        {...register('email', {
          required: 'Email is required',
        })}/>
        {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
      </div>
      <div className="space-y-1">
        <Label htmlFor="password">Password</Label>
        <Input
        id="password"
        type="password"
        placeholder="*****"
        {...register('password', {
          required: 'Password is required',
          })} />
        {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}
      </div>
      <div className="space-y-1">
        <Button type="submit">Login</Button>
      </div>
    </form>
  )
};

export default Register
