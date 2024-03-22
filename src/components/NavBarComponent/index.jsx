'use client';
import React, { useEffect, useState } from 'react';
import './index.css';
import Link from 'next/link';
import axios from 'axios';

function NavBarComponent({categories}) {

  const url = "http://ip172-18-0-4-cnur748l2o9000bamm6g-3001.direct.labs.play-with-docker.com";
  
  return (
    <div className='navbar-container w-100 h-16 p-4 flex row space-x-8 text-black'>
      <Link href='/' className='flex row w-40 items-center space-x-2 lg:ml-8 w-1/12'>
        <img src="/logo.png" alt="Logo" className='w-12' />
        <span className='text-2xl'>MyStore</span>
      </Link>
      <ul className='flex row text-black space-x-8 lg:w-3/4'>
        {
          categories.length > 0 && categories.map((category,index) => {
            return(
              <>
                {
                  index < 4 && 
                  <li key={category._id} className='min-w-40 text-center'>
                    <Link href={{
                      pathname: '/products',
                      query: { category_id: category._id },
                    }}>
                      {category.categoryName}</Link>
                  </li>
                }
              </>
            )
          })
        }
        <li className='min-w-40 text-center'>All Categories</li>
      </ul>
      <div className='lg:w-1/12 flex row items-center space-x-2'>
        <div>
          <span><a href="/login">Login</a> / <a href="">SingUp</a></span>
        </div>
      </div>
      <div className='w-1/12'>
        <Link href="/cart"><img src="/shopping_cart.png" alt="" className='w-12 right-0'/></Link>
      </div>
    </div>
  )
}

export default NavBarComponent;