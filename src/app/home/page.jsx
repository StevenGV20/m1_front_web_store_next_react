import BannerComponent from '@/components/BannerComponent';
import ProductListComponent from '@/components/ProductListComponent';
import React from 'react'

function Home() {
  return (
    <div>
      <BannerComponent></BannerComponent>
      <ProductListComponent></ProductListComponent>
    </div>
  )
}

export default Home;