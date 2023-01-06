import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "@/components/Base/Button";
import supabase from "@/lib/Supabase";

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

  return (
    <section className="flex flex-col items-center ">
      <div className="font-bold px-3">Register</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="email"
              className="border-2 border-sky-500 rounded-lg px-2 py-1"
              {...register("email", { required: true })}
            />
            <span className="text-red-600">
              {errors.email && "This field is required"}
            </span>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border-2 border-sky-500 rounded-lg px-2 py-1"
              placeholder="password"
              {...register("password", { required: true })}
            />
            <span className="text-red-600">
              {errors.password && "This field is required"}
            </span>
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
