import { z } from 'zod';
import { superValidate } from 'sveltekit-superforms/server';
import { fail } from '@sveltejs/kit';

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
    default: async ({ request }) => {
        const form = await superValidate(request,schema);
        console.log(form);
        
        if(!form.valid){
            return fail(400, {
                form
            })
        }
        return {
            form
        }
    }
}