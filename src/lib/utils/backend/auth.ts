import endpoints from '$lib/constants/endpoints';
import type {  Cookies } from '@sveltejs/kit';
import { errorMessage } from './error';
import Fetcher from '../Fetcher';
export async function login(email: string, password: string, fetch: Fetch, cookies: Cookies): Promise<Message> {
	try {
		const response = await Fetcher.of(fetch).post(endpoints.login,{
			email, password
		},

		 )
		 const data = await response.json();
		cookies.set('token', data.access_token, {
			maxAge: 60*60*24,
			path: '/'
		})										
		return {type: 'success',text: 'Login successful',data}
	} catch (error: any) {
		return await errorMessage(error);
	}
}
