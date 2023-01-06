import Button from "@/components/Base/Button";
import supabase from "@/lib/Supabase";
import { FC } from "react";

const Login: FC = () => {
  async function login() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "zbyszek791@hotmail.com",
      password: "test1234",
    });

    console.log(data);
    console.error(error);
  }

  async function logout() {
    const { error } = await supabase.auth.signOut();
    console.error(error);
  }

  return (
    <div>
      Login <Button title="Login" onClick={login} />
      Logout <Button title="Logout" onClick={logout} />
    </div>
  );
};

export default Login;
