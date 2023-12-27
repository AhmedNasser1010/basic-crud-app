import PageTitle from "./Component/PageTitle.jsx";
import "./style/table.css";
import React, { useState, useEffect } from 'react';
import { View } from "./Component/Btns.jsx";

function TableTr(props) {
	return (

		<tr>
			<th>{props.category.id}</th>
			<th>{props.category.name}</th>
			<th><View /></th>
		</tr>

	);
}

function Table(props) {
	return (

		<table className="styled-table">
			<thead>
				<tr>
					<th>id.</th>
					<th>Title</th>
					<th>Action</th>
				</tr>
			</thead>
			<tbody>
				{props.categories.map(category => (<TableTr key={category.id} category={category} />))}
			</tbody>
		</table>

	);
}

function Categories() {
	const [categories, setCategories] = useState([]);

	useEffect(() => {

		fetch("http://localhost:4000/categories")
			.then(res => res.json())
			.then(json => setCategories(json));

	}, [])


	return (

		<div className="categories">
			<PageTitle title="Categories" />
			<Table categories={categories} />
		</div>

	);
}

export default Categories;