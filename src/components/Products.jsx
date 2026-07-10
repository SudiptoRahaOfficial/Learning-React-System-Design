import React, { useEffect, useState } from 'react'
import { getProducts } from '../services/productServices'
import ErrorToast from './ErrorToast'
import ProductCard from './ProductCard'

function Products() {
	const [productlist, setproductlist] = useState([])
	const [message, setmessage] = useState('')

	useEffect(() => {
		getProductsList()
	}, [])

	const getProductsList = async () => {
		try {
			// to see error toast functionality remove 10 & keep getProducts argument empty ->
			let productsResponse = await getProducts(32)
			console.log(productsResponse)
			setproductlist(productsResponse)
		} catch (error) {
			setmessage(error.message)
			console.log(error)
		}
	}

	function showOfferPrice(price) {
		const offerPrice = (price - (price * 20) / 100).toFixed(2)
		const msg = `Price: ${price} | Offer Price: ${offerPrice} | Enjoy 20% Discount!`
		alert(msg)
	}

	return (
		<div style={{ margin: '40px 0' }}>
			<h2 style={{ margin: '0 0 40px 35px' }}>List Of Products :</h2>
			<ErrorToast message={message} />
			<div className='products-container'>
				{productlist.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						showOfferPrice={showOfferPrice}
					/>
				))}
			</div>
		</div>
	)
}

export default Products