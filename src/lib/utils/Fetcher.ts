import keys from '../constants/keys';
import FetchError from './helpers/FetchError';
import type { Cookies } from '@sveltejs/kit';

const DEFAULT_HTTP_HEADERS: any = {
  // 'Content-Type': 'multipart/form-data',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
};
class Fetcher {
	fetch;

	static of(fetch: Fetch, cookies?: Cookies | null): Fetcher {
		return new Fetcher(fetch, cookies);
	}
	constructor(fetch: Fetch, cookies?: Cookies | null) {
		this.fetch = fetch;
    const token = cookies?.get('token');
    DEFAULT_HTTP_HEADERS.Authorization = `Bearer ${token}`;
	}

	async get(endpoint: string): Promise<Response> {
		const response = await this.fetch(`${keys.BACKEND_URL}${endpoint}`, {
			method: 'GET',
			headers: {
				...DEFAULT_HTTP_HEADERS,
				'Content-Type': 'application/json',
			}
		});
    return successOrThrow(response);
	}
	async post(endpoint: string, data: FormData | object, isForm=false): Promise<Response> {
		const headers = isForm? DEFAULT_HTTP_HEADERS: {
			...DEFAULT_HTTP_HEADERS,
			'Content-Type': 'application/json',
		}
		const body: FormData | string = isForm? data as FormData: JSON.stringify(data);
		const response = await this.fetch(`${keys.BACKEND_URL}${endpoint}`, {
			method: 'POST',
			headers: headers,
			body: body
		});
    return successOrThrow(response);
	}
}
function successOrThrow(response : Response): Response{
  if(isStatusSuccess(response.status)){
    return response;
  }
  throw new FetchError(response)
}
const isStatusSuccess = (status: number): boolean => {
  return status >= 200 && status < 300;
}
export default Fetcher;
