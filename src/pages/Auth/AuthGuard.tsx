import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import { User } from "@supabase/supabase-js";
import getUser from "@/lib/Supabase/api/getUser";

export async function loader() {
  const user = await getUser();
  return user;
}

const AuthGuard = () => {
  const user = useLoaderData() as User | null;

  return user?.id ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;
