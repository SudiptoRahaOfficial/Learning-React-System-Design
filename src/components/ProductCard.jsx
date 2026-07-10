import { Link } from 'react-router'

function ProductCard({ product, showOfferPrice }) {
	const { id, thumbnail, title, price } = product
	return (
		<article className='product-card'>
			<img
				src={thumbnail}
				alt={thumbnail}
				className='product-card-image'
			/>

			<div className='product-card-body'>
				<h2 className='product-card-title'>{title}</h2>

				<p className='product-card-price'>${price}</p>

				<Link to={`/products/${id}`} className='product-card-button'>
					View Details
				</Link>
				<span
					onClick={() => showOfferPrice(price)}
					className='product-card-button offer-price-btn'
				>
					Offer Price
				</span>
			</div>
		</article>
	)
}

export default ProductCard