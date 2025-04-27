import Link from "next/link";
import { Button } from "@/components/ui/button";

const Home = () => {

  return (
    <div className="p-4 flex items-center gap-4">
      <Link href="/sign-in">
        <Button>Sign In</Button>
      </Link>
      <Link href="/sign-up">
        <Button>Sign Up</Button>
      </Link>
    </div>
  );
};

export default Home;
