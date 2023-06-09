import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail, redirect } from '@sveltejs/kit';
import { loginUser } from '$lib/utils/userUtils.js';
import { setAuthToken } from '$lib/utils/authUtils.js';

// Name has a default value just to display something in the form.
const schema = z.object({
  password: z.string().min(8).max(100),
  email: z.string().email()
});

export const load = async (event) => {
    const form = await superValidate(event,schema)
    return {
        form
    }
}

export const actions = {
    default: async ({cookies, request }) => {
        const form = await superValidate(request,schema);
        
        if(!form.valid){
            return fail(400, {
                form
            })
        }
        const {data: {email, password}} = form;
    
        const {error, token} = await loginUser(email, password);
        if(error){
            return fail(error.status, {
                form,
                error
            })
        }
        if(token){
            setAuthToken({cookies, token: token as string});

            throw redirect(302,'/profile');
        }
        
        return {
            form
        }
    }
}