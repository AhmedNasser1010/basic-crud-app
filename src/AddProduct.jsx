import PageTitle from "./Component/PageTitle.jsx";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./style/addProduct.css";
import { getDate, getTime } from "./script.js";

function Form() {
	const [values, setValues] = useState({title: "", image: "", category: "", description: "", price: 0, date: getDate(), time: getTime()});
	const navigate = useNavigate();

	function handleSubmit(e) {
		e.preventDefault();

		if (values.title === "" || values.category === "" || values.description === "") {
			return false;
		} else {

			fetch("http://localhost:4000/products", {
				method: "POST",
				headers: {"Content-Type": "Application/json"},
				body: JSON.stringify(values),
			})
			.then(res => navigate("/"));
		}
		
	}

	function handleOnChange(e) {
		const name = e.target.name;
		const value = e.target.value;

		setValues({...values, [name]: value});
	}

	return (

		<form onSubmit={handleSubmit}>
			<label>
				Title:
				<input value={values.title} type="text" placeholder="Title" name="title" onChange={handleOnChange} />
			</label>
			<label>
				Image Link:
				<input type="text" placeholder="Image Link" name="image" value={values.image} onChange={handleOnChange} />
			</label>
			<label>
				Category:
				<input value={values.category} type="text" placeholder="Category" name="category" onChange={handleOnChange} />
			</label>
			<label>
				Description:
				<textarea value={values.description} placeholder="Description" name="description" onChange={handleOnChange} />
			</label>
			<label>
				Price:
				<input value={values.price} type="text" placeholder="Price" name="price" onChange={handleOnChange} />
			</label>
			<input type="submit" value="Submit" className="submit-btn" />
		</form>

	);
}


function AddProduct() {
	return (

		<div className="add-product">
			<PageTitle title="Add a New Product" />
			<Form />
		</div>

	);
}

export default AddProduct;