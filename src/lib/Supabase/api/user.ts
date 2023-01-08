import supabase from "../supabaseClient";

export async function getUser() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
}
