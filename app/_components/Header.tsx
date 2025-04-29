"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "@/types/type";
import { verifySession } from "../_lib/session";
import { getUser } from "../_data/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NAV_LINKS = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Anime",
    href: "/anime",
  },
  {
    name: "Manga",
    href: "/manga",
  },
  {
    name: "Contact",
    href: "/contact",
  }
]

const Header = () => {
  const pathname = usePathname()
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const getCurrentUser = async () => {
      const res = await getUser()
      setUser(res)
    }
    getCurrentUser()
  }, [])



  return (
    <header className="w-[85%] mx-auto py-3">
      <nav className="flex items-center justify-between">
        <Image src="/TomadachiLogo.png" alt="logo" width={200} height={200} />
        <ul className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className={`${pathname === link.href ? "font-bold" : ""} text-lg`}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          {
            user ? (
              <Link href="/user/profile">
                <Avatar className="size-10">
                  <AvatarImage
                    src={user?.profile_picture || '/default-avatar.png'}
                    alt={user?.username || 'User'}
                  />
                  <AvatarFallback>
                    {user?.username?.[0]?.toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>

              </Link>
            ) : (
              <>
                <Link href="/sign-in">
                  <Button>Sign In</Button>
                </Link>
                <Link href="/sign-up">
                  <Button>Get Started</Button>
                </Link>
              </>
            )
          }
        </div>
      </nav>
    </header>
  )
};

export default Header
