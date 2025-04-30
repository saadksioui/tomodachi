"use client"
import { Button } from "@/components/ui/button";
import { logout } from "../_actions/auth";
import { LogOut } from "lucide-react";

const LogoutBtn = () => {
  return (
    <Button className="cursor-pointer" variant={"outline"} onClick={() => logout()}>
      Logout <LogOut />
    </Button>
  )
};

export default LogoutBtn
