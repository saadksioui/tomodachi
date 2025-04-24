"use client";

import { useUserStore } from "@/stores/useUserStore";

const page = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      {user ? <p>Hello, {user.username}</p> : <p>Loading...</p>}
    </div>
  );
};

export default page
