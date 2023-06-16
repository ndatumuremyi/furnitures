
import { superValidate, message } from 'sveltekit-superforms/server';


import Fetcher from '$lib/utils/Fetcher.js';
import endpoints from '$lib/constants/endpoints.js';
import { errorMessage } from '$lib/utils/backend/error.js';
import type {RequestEvent} from "@sveltejs/kit";
import createFurnitureSchema from "$lib/schema/createFurnitureSchema";



export const load = async (event: RequestEvent) => {
    const {fetch, cookies} = event;
    const form = await superValidate<typeof createFurnitureSchema, Message>(event, createFurnitureSchema);

    const res = await Fetcher.of(fetch, cookies).get(endpoints.categories);
    const furniture = await Fetcher.of(fetch, cookies).get(endpoints.furniture);
    return {
        form,
        categories: await res.json(),
        furniture: await furniture.json()

    };
};

export const actions = {
    createFurniture: async ({ request, cookies, fetch }:RequestEvent) => {
        const formData = await request.formData();
        const form = await superValidate<typeof createFurnitureSchema, Message>(formData, createFurnitureSchema);



        console.log("furniture run", form)
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
            const response = await Fetcher.of(fetch, cookies).post(endpoints.furniture, formData, true)
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
