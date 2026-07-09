import { getAPI } from './apis/baseServices'
import { PRODUCT_URL } from './apis/endPoints'

const url = PRODUCT_URL
export async function getProducts(limit) {
	const urlWithLimit = `${url}?limit=${limit}`
	try {
		let result = await getAPI(urlWithLimit)
		result = result.products

		return result
	} catch (error) {
		throw error
	}
}