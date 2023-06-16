import { redirect } from '@sveltejs/kit';

export async function handle({ event, resolve }) {
	if (event.route.id?.includes('protected')) {
		const token = event.cookies.get('token');
		if (!token) {
			throw redirect(302, '/auth/login');
		}
    }
		return await resolve(event);
	}

