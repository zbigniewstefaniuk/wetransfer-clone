import supabase from "../supabaseClient";

export default async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
