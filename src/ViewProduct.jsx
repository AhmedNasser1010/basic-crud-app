import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import PageTitle from "./Component/PageTitle.jsx";

function ViewProduct() {
	const [product, setProduct] = useState([]);
	const productId = useParams().productId;

	useEffect(() => {

		fetch(`http://localhost:4000/products/${productId}`)
			.then(res => res.json())
			.then(json => setProduct(json));

	}, []);

	return (

		<div className="view-product">
			<PageTitle title={`Product: ${product.title} - ${product.category}`} />
			<img src={product.image} alt="product image" />
			<p>{product.description}</p>
			<span>Price: {product.price}</span>
		</div>

	);
}

export default ViewProduct;