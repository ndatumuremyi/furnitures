
import { superValidate, message } from 'sveltekit-superforms/server';


import createProductSchema from '$lib/schema/createProductSchema.js';
import Fetcher from '$lib/utils/Fetcher.js';
import endpoints from '$lib/constants/endpoints.js';
import { errorMessage } from '$lib/utils/backend/error.js';



export const load = async (event) => {
	const form = await superValidate<typeof createProductSchema, Message>(event, createProductSchema);
	return {
		form
	};
};

export const actions = {
	createCategory: async ({ request, cookies, fetch }) => {
        const formData = await request.formData();
        const form = await superValidate<typeof createProductSchema, Message>(formData, createProductSchema);
        


		if (!form.valid) {
			return message(
				form,
				{
					type: 'error',
					text: 'Please fill in the form correctly'
				},
				{
					status: 400
				}
			);
		}
        // const image = formData.get('image')

        try{
           const response = await Fetcher.of(fetch, cookies).post(endpoints.categories, formData, true)
           const res = await response.json();
           console.log(res)
           return message(form, {
            type: 'success',
            text: res.detail,
            status:response.status,
            data: res,
           })
        }catch(e: any){
            const msg = await errorMessage(e);
            return message(form,msg, {
				status: (msg.status || 400) as any
			});
        }
        
        
		return {
            form
        }
	}
};
