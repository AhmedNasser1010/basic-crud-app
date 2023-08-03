import { useParams } from "react-router-dom";
import PageTitle from "./Component/PageTitle.js";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


function Form(props) {
	const [values, setValues] = useState({title: "", image: "", category: "", description: "", price: 0});
	const productId = useParams().productId;
	const navigate = useNavigate();

	useEffect(() => {

		fetch(`http://localhost:4000/products/${productId}`)
			.then(res => res.json())
			.then(json => setValues(json));

	}, []);

	useEffect(() => {

		props.getTitle(values.title);

	}, [values]);

	function handleSubmit(e) {
		e.preventDefault();

		if (values.title === "" || values.category === "" || values.description === "") {
			return false;
		} else {

			fetch(`http://localhost:4000/products/${productId}`, {
				method: "PUT",
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
				<input onChange={handleOnChange} value={values.title} type="text" placeholder="Title" name="title" />
			</label>
			<label>
				Image Link:
				<input onChange={handleOnChange} value={values.image} type="text" placeholder="Image Link" name="image" />
			</label>
			<label>
				Category:
				<input onChange={handleOnChange} value={values.category} type="text" placeholder="Category" name="category" />
			</label>
			<label>
				Description:
				<textarea onChange={handleOnChange} value={values.description} placeholder="Description" name="description" />
			</label>
			<label>
				Price:
				<input onChange={handleOnChange} value={values.price} type="text" placeholder="Price" name="price" />
			</label>
			<input type="submit" value="Submit" className="submit-btn" />
		</form>

	);
}

function EditProduct() {
	const [productName, setProductName] = useState("");

	function getTitle(value) {
		setProductName(value);
	}

	function result() {
		if (productName === "") {
			return "Loading...";
		} else {
			return productName;
		}
	}

	return (

		<div className="edit-product">
			<PageTitle title={`Edit - ${result()}`} />
			<Form getTitle={getTitle} />
		</div>

	);
}

export default EditProduct;