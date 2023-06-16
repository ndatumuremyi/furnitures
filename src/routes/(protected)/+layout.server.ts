import { errorMessage } from '$lib/utils/backend/error.js';
import jwtDecode from 'jwt-decode';

export const load = async ({ cookies }): Promise<{ profile: Message }> => {
	try {
		const token = cookies.get('token');
		const decodeToken = jwtDecode(token as string);
		return {
			profile: {
				text: 'Profile loaded',
				type: 'success',
				data: decodeToken
			}
		};
	} catch (e: any) {
		return errorMessage(e);
	}
};
