'use client';
import React, { useEffect, useState }  from 'react';
import axios from "axios";
import { API_URI } from '../util/constantes';
import NavBarComponent from '../components/NavBarComponent';
import FooterComponent from '../components/FooterComponent';

function Layout({children}) {  

  const [categories, setCategories] = useState([]);

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        //const response = await axios.get(`${API_URI}/categories`);
        //console.log(response.data);
        //localStorage.setItem("CATEGORIES",JSON.stringify(response.data));
        const dataCategories = await JSON.parse(localStorage.getItem("CATEGORIES"))
        setCategories(dataCategories);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [])

  return (
    <>
      <NavBarComponent categories={categories}></NavBarComponent>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 m-4 rounded-lg bg-white main_container">
        {children}
      </main>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default Layout;