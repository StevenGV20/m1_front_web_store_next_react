'use client';
import Layout from "../../layout";
import { API_URI } from "../../../util/constantes";
import ProductListComponent from "../../../components/ProductListComponent";
import SearchComponent from "../../../components/SearchComponent";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoryPage = (props) => {

    const { category } = props.params;
/*   const queryString = location.search;
  const params = new URLSearchParams(queryString);
  const category = params.get("category");
  const [products, setProducts] = useState([]);
  const [objCategory, setObjCategory] = useState(null);  

  useEffect(() => {
    const getData = async () => {
      const data = (await axios.get(`${API_URI}/products`)).data;
      const listProducts = data.filter(item => item.category._id == category);
      console.log(listProducts);
      setObjCategory(listProducts.category)
      setProducts(listProducts);
    }
    getData();
  }, [category]) */
  
  return (
      <div>
        <SearchComponent></SearchComponent>
        <ProductListComponent category={category} products={[]}></ProductListComponent>
      </div>
  );
};

export default CategoryPage;
