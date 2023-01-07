import RootLayout from "@/components/layouts/RootLayout";
import { getUser } from "@/lib/Supabase/api";
import { User } from "@supabase/supabase-js";
import { Outlet, useLoaderData } from "react-router-dom";

export async function loader() {
  const user = await getUser();
  return user;
}

const Root = () => {
  const user = useLoaderData() as User | null;

  return (
    <RootLayout isSessionRetrieved={!!user?.id}>
      <Outlet />
    </RootLayout>
  );
};

export default Root;
