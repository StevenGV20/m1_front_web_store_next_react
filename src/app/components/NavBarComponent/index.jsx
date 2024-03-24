'use client';
import React, { useEffect, useState } from 'react';
import './index.css';
import Link from 'next/link';

function NavBarComponent({categories}) {
  const [showSubMenu, setShowSubMenu] = useState(false);
/*   const [screenWindow, setScreenWindow] = useState(window.innerWidth);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const [limitShowCategories, setLimitShowCategories] = useState(1); */

  
/*   const handleResize = () => {
    if(window.innerWidth > 1200) setLimitShowCategories(4);
    else if(window.innerWidth > 700) setLimitShowCategories(2);
    else if(window.innerWidth > 500) setLimitShowCategories(2);
    console.log(limitShowCategories);
  };

  window.addEventListener('resize', handleResize); */

  return (
    <div className='navbar-container w-100 h-16 p-4 flex row space-x-8 text-black'>
      <Link href='/store' className='flex row w-40 items-center space-x-2 lg:ml-8 w-1/12'>
        <img src="/logo.png" alt="Logo" className='w-12' />
        <span className='text-2xl'>MyStore</span>
      </Link>
      <ul className='text-black space-x-8 lg:w-3/4 relative'>
        <div className='flex row'>
          {
            categories.length > 0 && categories.map((category,index) => {
              return(
                <>
                  {
                    index < 3 && 
                    <li key={category._id} className='min-w-40 text-center'>
                      <Link key={category._id} href={`/store/${category.categoryName}`}>
                        {category.categoryName}</Link>
                    </li>
                  }
                </>
              )
            })
          }
          <li className='min-w-40 text-center' onMouseEnter={()=> setShowSubMenu(true)}>All Categories</li>
        </div>
        {
          showSubMenu && 
          <div className='bg-neutral-100 rounded-2xl grid grid-cols-4 m-12 h-64 md:w-2/3 2xl:w-1/2 py-8 shadow-md' onMouseLeave={()=> setShowSubMenu(false)}>
            {
              categories.length > 0 && categories.map((category,index) => {
                return(
                  <>
                    {
                      <li key={category._id} className='min-w-40 text-center'>
                        <Link key={category._id} href={`/store/${category.categoryName}`}>
                          {category.categoryName}</Link>
                      </li>
                    }
                  </>
                )
              })
            }
          </div>
        }
      </ul>
      <div className=' lg:w-1/12 flex row items-center space-x-2'>
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