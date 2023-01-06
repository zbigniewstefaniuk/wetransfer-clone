import supabase from "@/lib/Supabse/supabaseCLient";
import { FC } from "react";

const Login: FC = () => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: "example@email.com",
    password: "example-password",
  });
  return <div>Login</div>;
};

export default Login;
