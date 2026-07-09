import { getAPI } from "./apis/baseServices";
import { PRODUCT_URL } from "./apis/endPoints";

const url = PRODUCT_URL
export async function getProducts(limit) {
    let result = await getAPI(`${url}?limit=${limit}`)
    result = await result.json()
    result = result.products

    return result
}