"use client";
import Image from "next/image";
import React, { useState } from "react";
import "./index.css";

function ProductCardComponent({ product }) {
  const moneda = "$";
  const [onMouse, setOnMouse] = useState(false);

  const renderCard = () => {
    return <></>;
  };

  return (
    <div
      className={`product-card-container ${onMouse ? 'shadow-lg' : 'bg-neutral-100'} m-4 rounded-2xl`}
      onMouseEnter={() => setOnMouse(true)}
      onMouseLeave={() => setOnMouse(false)}
    >
      {
        onMouse ? 
        <>
          <div className="h-3/4 text-center grid justify-items-center content-center rounded-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg mt-0 h-auto"
            />
          </div>
          <div className="flex flex-row px-4 py-2 text-lg">
            <figcaption className="w-4/5">{product.name}</figcaption>
            <div className="w-1/5 text-right">
              {moneda} {product.price}
            </div>
          </div>
        </>
        :
        <>
          <div className="h-3/4 text-center grid justify-items-center content-center rounded-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="rounded-lg mt-8 h-auto"
            />
          </div>
          <div className="flex flex-row px-4 py-2 text-lg">
            <figcaption className="w-4/5">{product.name}</figcaption>
            <div className="w-1/5 text-right">
              {moneda} {product.price}
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default ProductCardComponent;
