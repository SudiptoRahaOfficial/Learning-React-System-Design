import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/productServices'
import ErrorToast from './ErrorToast'

function Products() {
	const [message, setmessage] = useState('')

	useEffect(() => {
		getProductsList()
	}, [])

	const getProductsList = async () => {
		try {
			// to see error toast functionality remove 10 & keep getProducts argument empty ->
			let products = await getProducts(10)
			console.log(products)
		} catch (error) {
			setmessage(error.message)
			console.log(error)
		}
	}

	return (
		<div>
			<h2>Product Listing :</h2>
			<ErrorToast message={message} />
		</div>
	)
}

export default Products