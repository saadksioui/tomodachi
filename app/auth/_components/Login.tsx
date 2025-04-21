"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { loginSchema } from "@/zodSchema/login";

type FormData = z.infer<typeof loginSchema>;


const Login = () => {
  const navigate = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: { email: string; password: string; }) => {
    const { email, password } = data;

    try {
      const response = await axios.post(`/api/auth/login`, { email, password });
      if (response.data.success) {
        toast.success("Login successful!");
        console.log(response.data.user);

        navigate.push("/profile")
      } else {
        toast.error(response.data.message || "Login failed. Please try again.");
      }

    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.");
    }

  };



  return (
    <form onSubmit={handleSubmit(handleLogin)}>
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

export default Login
