import React, { useEffect, useState }  from 'react';
import FooterComponent from "@/components/FooterComponent";
import NavBarComponent from "@/components/NavBarComponent";
import axios, { Axios } from "axios";
import useSWR from 'swr';

function Layout({children}) {  

  const [categories, setCategories] = useState([]);
  const url = "http://ip172-18-0-4-cnuv1oi91nsg00f9tnvg-3001.direct.labs.play-with-docker.com";
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${url}/categories`);
        console.log(response.data);
        localStorage.setItem("CATEGORIES",JSON.stringify(response.data));
        setCategories(response.data);
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