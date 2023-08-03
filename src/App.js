import "./style/Normaliz.css";
import "./style/all.css";
import { Routes, Route } from "react-router-dom";

import SideBar from "./Component/SideBar.js";
import Home from "./Home.js";
import Categories from "./Categories.js";
import AddProduct from "./AddProduct.js";
import ViewProduct from "./ViewProduct.js";
import EditProduct from "./EditProduct.js";


function App() {
  return (

    <>
      <div className="side-bar-container"><SideBar /></div>
      <div className="content">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories" element={<Categories />} />
          <Route path="new" element={<AddProduct />} />
          <Route path="products/:productId" element={<ViewProduct />} />
          <Route path="products/edit/:productId" element={<EditProduct />} />
        </Routes>

      </div>
    </>

  );
}

export default App;