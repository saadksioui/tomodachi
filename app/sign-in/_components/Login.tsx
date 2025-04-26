"use client"
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
import { LoaderCircle } from "lucide-react"
import { signin } from "../actions"
import { useActionState } from "react"


const Login = () => {

  const [state, action, pending] = useActionState(signin, undefined)

  return (
    <Card className="w-[450px] border-none shadow-none">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Sign In</CardTitle>
        <CardDescription>
          Enter your email and password
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form action={action}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-3">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
              />
              {state?.errors?.email && <p className="text-sm text-red-500">{state.errors.email}</p>}
            </div>
            <div className="flex flex-col space-y-3">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              {state?.errors?.password && <p className="text-sm text-red-500">{state.errors.password}</p>}
            </div>
          </div>

          <Button type="submit" disabled={pending} className="w-full mt-6">{pending ? <LoaderCircle className="animate-spin" /> : "Sign In"}</Button>
        </form>
      </CardContent>
    </Card>
  )
};

export default Login
