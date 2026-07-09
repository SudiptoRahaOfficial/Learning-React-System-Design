import React, { useEffect } from 'react'
import { getProducts } from '../services/productServices'

function Products() {
    useEffect(() => {
        getProductsList()
    }, [])

    const getProductsList = async () => {
        let products = await getProducts(10)
        console.log(products)
    }
    
	return (
		<div>
			<h2>Product Listing :</h2>
		</div>
	)
}

export default Products