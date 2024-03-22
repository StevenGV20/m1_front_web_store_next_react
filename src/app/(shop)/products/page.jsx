'use client';
import Layout from "@/app/components/layout";
import MainShopPages from "@/app/util/MainShopPages";
import ProductListComponent from "@/components/ProductListComponent";
import SearchComponent from "@/components/SearchComponent";
import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductPage = () => {

  return (
    <Layout>
      <div>
        <SearchComponent></SearchComponent>
        <ProductListComponent></ProductListComponent>
      </div>
    </Layout>
  );
};

export default ProductPage;
