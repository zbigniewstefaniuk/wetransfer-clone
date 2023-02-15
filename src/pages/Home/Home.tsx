import { useForm } from "react-hook-form";
import supabase from "@/lib/Supabase";

type FormData = {
  file: FileList;
};

const Home = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const files = watch("file");

  console.log("files :>> ", files);

  const onSubmit = async (formData: FormData) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { data, error } = await supabase.storage
      .from("files")
      .upload(`${user?.email}/${formData.file[0].name}`, formData.file[0], {
        cacheControl: "3600",
        upsert: false,
      });

    console.log("object :>> ", { data, error });

    console.log(formData);
    reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-6"
      >
        <label>Upload file</label>
        <input
          type="file"
          multiple
          {...register("file", { required: true })}
          className="file-input file-input-bordered file-input-secondary w-full max-w-xs"
        />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      {files && Object.values(files).map((file) => <div>{file.name}</div>)}
    </div>
  );
};

export default Home;
