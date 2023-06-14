class FetchError extends Error {
	response: Response;
	constructor(response: Response) {
        super(response.statusText)
		this.response = response;
	}
}


export default FetchError;