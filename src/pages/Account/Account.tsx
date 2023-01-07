import getUser from "@/lib/Supabase/api/getUser";
import { User } from "@supabase/supabase-js";
import { useLoaderData } from "react-router-dom";

export async function loader() {
  const user = await getUser();
  return user;
}

const Account = () => {
  const user = useLoaderData() as User | null;

  console.log("user", user);
  return (
    <div>
      Account
      {user && <p>{JSON.stringify(user, null, 2)}</p>}
    </div>
  );
};

export default Account;
