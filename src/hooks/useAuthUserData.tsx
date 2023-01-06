import { useEffect, useState } from "react";
import supabase from "@/lib/Supabase";
import { User } from "@supabase/supabase-js";
import useAuthStateChange from "./useAuthStateChange";

const useAuthUserData = (): User | null => {
  const [user, setUser] = useState<User | null>(null);
  const { event } = useAuthStateChange();

  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log("user", user);
    return user;
  }

  useEffect(() => {
    getUser().then((user) => setUser(user));
  }, [event]);

  return user;
};

export default useAuthUserData;
