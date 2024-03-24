import BannerComponent from '../../components/BannerComponent';
import ProductListComponent from '../../components/ProductListComponent';
import React from 'react'
import Layout from '../layout';

function Home() {
  return (
      <div>
        <BannerComponent></BannerComponent>
        <ProductListComponent></ProductListComponent>
      </div>      
  )
}

export default Home;