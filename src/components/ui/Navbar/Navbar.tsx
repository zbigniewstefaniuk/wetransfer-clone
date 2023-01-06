import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Base/Button";
import supabase from "@/lib/Supabase";

interface Props {
  isLoggedIn: boolean;
}

async function logout() {
  const { error } = await supabase.auth.signOut();
  console.error(error);
}

const Navbar: FC<Props> = ({ isLoggedIn = false }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap justify-end items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5 gap-4">
        <Button title="Transfers" onClick={logout} />
        {isLoggedIn ? (
          <Button title="Logout" onClick={logout} />
        ) : (
          <>
            <Button title="Sign Up" onClick={() => navigate("/register")} />
            <Button title="Login" onClick={() => navigate("/login")} />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
