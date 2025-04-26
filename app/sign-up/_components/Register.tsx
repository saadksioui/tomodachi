"use client";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useActionState } from "react";
import Link from "next/link";
import { LoaderCircle } from "lucide-react";
import { signup } from "../actions";


const Register = () => {
  const [state, action, pending] = useActionState(signup, undefined)

  return (
    <Card className="w-[450px] border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
        <CardDescription>
          <p className="text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/sign-in" className="underline">Sign In</Link>
          </p>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form action={action}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-3">
              <Label htmlFor="username">Username</Label>
              <Input
                id="username"
                type="username"
                name="username"
                placeholder="Enter your username" />
            </div>
            {state?.errors?.username && <p className="text-sm text-red-500">{state.errors.username}</p>}
            <div className="flex flex-col space-y-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email" />
            </div>
            {state?.errors?.email && <p className="text-sm text-red-500">{state.errors.email}</p>}
            <div className="flex flex-col space-y-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password" />
            </div>
            {state?.errors?.password && <p className="text-sm text-red-500">{state.errors.password}</p>}
          </div>

          <Button type="submit" disabled={pending} className="w-full mt-6">{pending ? <LoaderCircle className="animate-spin" /> : "Sign Up"}</Button>
        </form>
      </CardContent>
    </Card>
  )
};

export default Register
