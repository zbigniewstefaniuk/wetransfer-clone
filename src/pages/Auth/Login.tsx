import { FC } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@/components/Base/Button";
import supabase from "@/lib/Supabase";

const Login: FC = () => {
  const navigate = useNavigate();

  async function login() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: "zbyszek791@hotmail.com",
      password: "test1234",
    });

    console.log(data);
    console.error(error);

    navigate("/");
  }

  return (
    <div>
      Login <Button title="Login" onClick={login} />
    </div>
  );
};

export default Login;
