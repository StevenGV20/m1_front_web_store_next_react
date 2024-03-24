'use client';
import React, { useEffect, useState } from "react";
import LoaderComponent from "./components/LoaderComponent";
import { API_URI } from "./util/constantes";

export default function App() {
  const [categories, setCategories] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        /* const response = await axios.get(`${API_URI}/categories`);
        console.log(response.data);
        localStorage.setItem("CATEGORIES",JSON.stringify(response.data));
        setCategories(response.data); */

        fetch(`${API_URI}/categories`)
        .then(response => response.json()) // Parse the response as JSON
        .then(data => {
          localStorage.setItem("CATEGORIES",JSON.stringify(data));
          setCategories(data);
          console.log(data); // Process the fetched data
          window.location.href = "/store";
        })
        .catch(error => {
          console.error(error);
          window.location.href = "/store";
        });
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [])
  /* 
  setTimeout(()=>{
  },2000) */
  return (
      <LoaderComponent></LoaderComponent>
  );
}
