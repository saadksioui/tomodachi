// hooks/useInitUser.ts
import { useEffect } from "react";
import axios from "axios";
import { useUserStore } from "@/stores/useUserStore";

const useInitUser = () => {
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (!token) return setUser(null);

      try {
        const res = await axios.get("/api/auth/user", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
        localStorage.removeItem("token");
      }
    };

    fetchUser();
  }, []);
};

export default useInitUser;
