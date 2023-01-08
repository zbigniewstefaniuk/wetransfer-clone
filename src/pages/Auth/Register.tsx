import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/Base/Button";
import supabase from "@/lib/Supabase";
import Input from "@/components/Form/Input";
import Error from "@/components/Form/Error";

type Inputs = {
  email: string;
  password: string;
};

const Register: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setIsLoading(true);
    const { data, error } = await supabase.auth.signUp({
      email: formData.email,
      password: formData.password,
    });

    if (data.user?.id) {
      navigate("/confirm-mail");
    }

    console.log(data);
    console.error(error);
    setIsLoading(false);
  };

  console.log("errors", errors);
  return (
    <section className="flex flex-col items-center ">
      <div className="font-bold px-3">Register</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-4 bg-slate-200 p-5 rounded-lg dark:bg-gray-900">
          <div className="flex flex-col">
            <Input
              placeholder="Email"
              label="Email"
              {...register("email", { required: true })}
            />
            {errors.email && <Error />}
          </div>
          <div className="flex flex-col">
            <Input
              label="Password"
              type="password"
              placeholder="password"
              {...register("password", { required: true })}
            />
            {errors.password && <Error />}
          </div>
          <div className="flex flex-col">
            <Button
              type="submit"
              title="Create Account"
              isLoading={isLoading}
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default Register;
