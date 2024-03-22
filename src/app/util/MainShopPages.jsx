import React, { useEffect, useState }  from 'react';
import FooterComponent from "@/components/FooterComponent";
import NavBarComponent from "@/components/NavBarComponent";
import axios, { Axios } from "axios";

function MainShopPages({children}) {

  
  return (
    <>
      <NavBarComponent></NavBarComponent>
      <main className="flex min-h-screen flex-col items-center justify-between p-4 m-4 rounded-lg bg-white main_container">
        {children}
      </main>
      <FooterComponent></FooterComponent>
    </>
  )
}

export default MainShopPages;