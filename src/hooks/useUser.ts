import { supabase } from "lib/supabase";

export default function useUser() {
  async function getUser() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    return user;
  }
  getUser();
}
