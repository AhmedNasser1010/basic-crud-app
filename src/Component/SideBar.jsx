import React from 'react';

import "../style/sideBar.css";
import { Link } from "react-router-dom";

function SideBar() {
	return (

		<div className="side-bar">
			<Link to="/" className="logo">Logo</Link>
			<ul>
				<li className="all-products link"><Link to="/">All Products</Link></li>
				<li className="categories link"><Link to="categories">Categories</Link></li>
			</ul>
		</div>

	);
}

export default SideBar;