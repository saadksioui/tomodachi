import { redirect } from "next/navigation";
import { verifySession } from "../_lib/session";
import { getUser } from "../_data/user";
import LogoutBtn from "../_components/LogoutBtn";
import Image from "next/image";


const Profile = async () => {
  const session = await verifySession()

  if (!session) {
    redirect('/sign-in')
  }

  const user = await getUser()

  return (
    <div>
      <p>Hello, {user.username}</p>
      <Image src={`/${user.profile_picture}`} alt={user.username} width={100} height={100}/>
      <LogoutBtn/>
    </div>
  );
};

export default Profile;
