import {redirect} from "@sveltejs/kit";

export const load = async ({locals}) => {
  const user = locals?.user;
  return {user};
};