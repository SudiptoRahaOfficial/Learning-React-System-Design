export async function getAPI(url) {
	let response = await fetch(url)
	if (!response.ok) {
		throw new Error('Server Error Occured! Please try after sometimes')
	}
	return await response.json()
}