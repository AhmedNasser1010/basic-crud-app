import "./style/home.css";
import "./style/table.css";
import PageTitle from "./Component/PageTitle.jsx";
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Edit, View, Delete } from "./Component/Btns.jsx";

function TableTr(props) {

	function handleDelete(id) {

		fetch(`http://localhost:4000/products/${id}`, {method: "DELETE"});
		const element = document.querySelector(`.row-${props.product.id}`);
		element.remove();

	}

	return (

		<tr className={`row-${props.product.id}`}>
			<th>{props.product.id}</th>
			<th>{props.product.title.slice(0, 10)}...</th>
			<th>{props.product.category}</th>
			<th>{props.product.description.slice(0, 20)}...</th>
			<th>{props.product.price}$</th>
			<th>{props.product.date}<br />{props.product.time}</th>
			<th>
				<Edit id={props.product.id} />
				<View id={props.product.id} />
				<Delete event={() => handleDelete(props.product.id)} />
			</th>
		</tr>

	);
}

function Table(props) {
	return (

		<table className="styled-table">
			<thead>
				<tr>
					<th>ID</th>
					<th>Title</th>
					<th>Category</th>
					<th>description</th>
					<th>Price</th>
					<th>Date</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				{props.products.map(product => (<TableTr key={product.id} product={product} />))}
			</tbody>
		</table>

	);
}

function Home() {
	const [products, setProducts] = useState([]);

	useEffect(() => {

		fetch("http://localhost:4000/products")
			.then(res => res.json())
			.then(json => setProducts(json));


	}, [])

	return (

		<div className="home">
			<PageTitle title="All Products" />
			<Link to="new" className="new-product">Add New Product</Link>
			<Table products={products} />
		</div>

	);
}

export default Home;