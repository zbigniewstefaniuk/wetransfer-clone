import { useEffect, useState } from "react";
import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import supabase from "@/lib/Supabase";

const useAuthStateChange = () => {
  const [authState, setAuthState] = useState<{
    event: AuthChangeEvent | null;
    session: Session | null;
  }>({
    event: null,
    session: null,
  });

  useEffect(() => {
    supabase.auth.onAuthStateChange(
      (event: AuthChangeEvent, session: Session | null) => {
        console.log(event, session);
        setAuthState({
          event,
          session,
        });
      }
    );
  }, []);

  return authState;
};

export default useAuthStateChange;
