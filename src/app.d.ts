// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
declare interface topNav {
	name: string;
	url: string;
}
type Message = {
	type: 'error' | 'success' | 'warning';
	text: string;
	data?: any;
	status?: number;
};

type Auth = {
	access_token?: string;
}

type Fetch = (input: URL | RequestInfo, init?: RequestInit | undefined) => Promise<Response>;