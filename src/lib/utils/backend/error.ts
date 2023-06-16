import { redirect } from "@sveltejs/kit";

export function formatError(error: any): Message {
	return {
		type: 'error',
		text: error?.response?.data?.detail || error.message || 'something went wrong'
	};
}
export async function errorMessage(error: any): Promise<Message> {
	const data = await error?.response?.json();
	return {
		type: 'error',
		text: data?.detail || error.message || 'something went wrong',
		status: error.status
	};
}


export function handleError(e: any): {status: number, error: Message} {
	const status = e?.response?.status || 500;
    if(status === 401){
    	// throw redirect(308, '/auth/login');
	}

	return {
		status: status,
		error: formatError(e)
	}
}
