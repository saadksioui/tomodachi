"use client"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { loginSchema } from "@/zodSchema/login"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react";
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { LoaderCircle } from "lucide-react"
import { FcGoogle } from "react-icons/fc"
import toast from "react-hot-toast"
import * as z from "zod";

type FormData = z.infer<typeof loginSchema>;

const Login = () => {
  const navigate = useRouter();
  const [pending, setPending] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = async (data: {email: string; password: string; }) => {
    console.log(data);
    setPending(true);
    const res = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password,
    });
    if (res?.ok) {
      navigate.push("/");
      toast.success("login successful");
    } else if (res?.status === 401) {
      toast.error("Invalid Credentials");
      setPending(false);
    } else {
      toast.error("Something went wrong");
    }

  }

  const handleProvider = (
    event: React.MouseEvent<HTMLButtonElement>,
    value: "google"
  ) => {
    event.preventDefault();
    signIn(value, { callbackUrl: "/" });
  };

  return (
    <Card className="w-[450px] h-[500px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your email and password
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required',
                })} />
              {errors.email && (
                <p className="text-red-500 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                {...register('password', {
                  required: 'Password is required',
                })} />
              {errors.password && (
                <p className="text-red-500 text-xs">{errors.password.message}</p>
              )}
            </div>
          </div>

          <Button type="submit" className="w-full mt-4">{pending ? <LoaderCircle className="animate-spin"/> : "Sign In"}</Button>
        </form>
      </CardContent>
      <CardFooter>
        <Button variant={"outline"} onClick={(e) => handleProvider(e, "google")}>
        <FcGoogle /> Google
        </Button>
      </CardFooter>
    </Card>
  )
};

export default Login
