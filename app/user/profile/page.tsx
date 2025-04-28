import { redirect } from "next/navigation";
import { verifySession } from "../../_lib/session";
import { getUser } from "../../_data/user";
import LogoutBtn from "../../_components/LogoutBtn";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ProfileForm from "./_components/ProfileForm";


const Profile = async () => {
  const session = await verifySession()

  if (!session) {
    redirect('/sign-in')
  }

  const user = await getUser()

  return (
    <div>
      <p>Hello, {user.username}</p>
      <Image src={`/${user.profile_picture}`} alt={user.username} width={100} height={100} />
      <LogoutBtn />
      <Link href="/anime">
        <Button>Anime</Button>
      </Link>
      <Link href="/manga">
        <Button>Manga</Button>
      </Link>
      <Link href="/user/watch-list">
        <Button>Watch List</Button>
      </Link>
      <Link href="/user/read-list">
        <Button>Read List</Button>
      </Link>
      <br />
      <ProfileForm currentUser={user} />
    </div>
  );
};

export default Profile;
