
import { superValidate, message } from 'sveltekit-superforms/server';


import createProductSchema from '$lib/schema/createProductSchema.js';
import Fetcher from '$lib/utils/Fetcher.js';
import endpoints from '$lib/constants/endpoints.js';
import { errorMessage } from '$lib/utils/backend/error.js';
import type {RequestEvent} from "@sveltejs/kit";



export const load = async (event: RequestEvent) => {
	const {fetch, cookies} = event;
	const form = await superValidate<typeof createProductSchema, Message>(event, createProductSchema);

	const res = await Fetcher.of(fetch, cookies).get(endpoints.categories);
	return {
		form,
		categories: await res.json()

	};
};

export const actions = {
	createCategory: async ({ request, cookies, fetch }:RequestEvent) => {
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

        try{
           const response = await Fetcher.of(fetch, cookies).post(endpoints.categories, formData, true)
           const res = await response.json();
           return message(form, {
            type: 'success',
            text: res.detail,
            status:response.status,
            data: res,
           })
        }catch(e: any){
            const msg = await errorMessage(e);
            return message(form,msg, {
				status: (msg.status || 400) as never
			});
        }
	}
};
