import endpoints from "$lib/constants/endpoints";
import Fetcher from "$lib/utils/Fetcher.js";
import { errorMessage } from "$lib/utils/backend/error.js";

export const load = async ({fetch, cookies}):Promise<Message> => {
  try{
 const response = await Fetcher.of(fetch, cookies).get(endpoints.profile);
 return {
  type: 'success',
  text: 'Profile loaded',
  status:response.status,
  data: await response.json()
 }

  }catch(e:any){
  return errorMessage(e)
  }
};