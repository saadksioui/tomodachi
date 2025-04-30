"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { User } from "@/types/type";
import { getUser } from "../_data/user";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Menu, X } from "lucide-react"; // Hamburger menu icons
import LogoutBtn from "./LogoutBtn";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Anime", href: "/anime" },
  { name: "Manga", href: "/manga" },
  { name: "Contact", href: "/contact" }
];

const Header = () => {
  const pathname = usePathname();
  const [user, setUser] = useState<User | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const getCurrentUser = async () => {
      const res = await getUser();
      setUser(res);
    };
    getCurrentUser();
  }, []);

  return (
    <header className="w-[90%] mx-auto py-3">
      <nav className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image src="/TomadachiLogo.png" alt="logo" width={160} height={160} />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.name} className={`${pathname === link.href ? "font-bold" : ""} text-lg`}>
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons or Avatar */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link href="/user/profile">
                <Avatar className="size-10">
                  <AvatarImage src={user?.profile_picture || '/default-avatar.png'} />
                  <AvatarFallback>
                    {user?.username?.[0]?.toUpperCase() || 'U'}
                  </AvatarFallback>
                </Avatar>
              </Link>
              <LogoutBtn />
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button variant="outline" className="cursor-pointer">Sign In</Button>
              </Link>
              <Link href="/sign-up">
                <Button className="cursor-pointer">Get Started</Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-lg ${pathname === link.href ? "font-bold" : ""}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            {user ? (
              <Link href="/user/profile" onClick={() => setMobileMenuOpen(false)}>
                <div className="flex items-center gap-2">
                  <Avatar className="size-9">
                    <AvatarImage src={user?.profile_picture || '/default-avatar.png'} />
                    <AvatarFallback>
                      {user?.username?.[0]?.toUpperCase() || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <span>{user.username}</span>
                </div>
              </Link>
            ) : (
              <>
                <Link href="/sign-in" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="outline" className="w-full">Sign In</Button>
                </Link>
                <Link href="/sign-up" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
