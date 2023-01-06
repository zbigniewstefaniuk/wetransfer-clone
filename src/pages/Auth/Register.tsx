import Button from "@/components/Base/Button";
import supabase from "@/lib/Supabse/supabaseCLient";
import { FC, SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  async function onSubmit(e: SyntheticEvent) {
    e.preventDefault();
    setIsLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (data.user?.id) {
      navigate("/confirm-mail");
    }

    console.log(data);
    console.error(error);
    setIsLoading(false);
  }

  return (
    <section className="flex flex-col items-center ">
      <div className="font-bold px-3">Register</div>
      <form onSubmit={onSubmit}>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="email"
              className="border-2 border-sky-500 rounded-lg px-2 py-1"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border-2 border-sky-500 rounded-lg px-2 py-1"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col">
            <Button
              type="submit"
              onClick={onSubmit}
              title="Submit"
              isLoading={isLoading}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
