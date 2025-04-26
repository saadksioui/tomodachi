"use client"
import { Button } from "@/components/ui/button";
import { logout } from "../_actions/auth";

const LogoutBtn = () => {
  return (
    <Button onClick={() => logout()}>Logout</Button>
  )
};

export default LogoutBtn
