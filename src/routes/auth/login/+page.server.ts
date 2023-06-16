import { z } from 'zod';
import { superValidate, message } from 'sveltekit-superforms/server';

import { login } from '$lib/utils/backend/auth.js';
import {redirect} from '@sveltejs/kit';
import type {Cookies, RequestEvent} from '@sveltejs/kit';


const schema = z.object({
	password: z.string().min(8).max(100),
	email: z.string().email()
});

export const load = async (event: RequestEvent) => {
	const form = await superValidate<typeof schema, Message>(event, schema);
	return {
		form
	};
};

export const actions = {
	default: async ({ request, cookies, fetch }:{request:Request, cookies:Cookies, fetch:Fetch}) => {
		const form = await superValidate<typeof schema, Message>(request, schema);

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
		const {
			data: { email, password }
		} = form;

		const msg= await login(email, password, fetch, cookies);
		if(msg.type === 'success'){
			throw redirect(302, '/me');
		}else {
			return message(form,msg, {
				status: (msg.status || 400) as never
			});
		}
	}
};
