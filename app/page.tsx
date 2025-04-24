"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Home = () => {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <div className="p-4 flex items-center gap-4">
      {session ? (
        <>
          {session.user?.image && (
            <Image
              className="size-10 rounded-full hover:opacity-75 transition"
              src={session.user.image}
              alt="User Avatar"
              width={40}
              height={40}
            />
          )}
          <Button className="h-10" onClick={handleSignOut}>
            Log out
          </Button>
        </>
      ) : (
        <Link href="/sign-in">
          <Button className="h-10">Join Us</Button>
        </Link>
      )}
    </div>
  );
};

export default Home;
