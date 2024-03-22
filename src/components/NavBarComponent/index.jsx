import React from 'react';
import './index.css';

function NavBarComponent() {
  const categories = [
    {id: 1,name: "Category1 Category1.5"},
    {id: 2,name: "Category2"},
    {id: 3,name: "Category3"},
    {id: 4,name: "Category4"},
    {id: 5,name: "Category5"},
  ]
  return (
    <div className='navbar-container w-100 h-16 p-4 flex row space-x-8 text-black'>
      <a href='/' className='flex row w-40 items-center space-x-2 lg:ml-8 w-1/12'>
        <img src="/logo.png" alt="Logo" className='w-12' />
        <span className='text-2xl'>MyStore</span>
      </a>
      <ul className='flex row text-black space-x-8 lg:w-3/4'>
        {
          categories.map(cat => {
            return(<>
              <li key={cat.id} className='min-w-40 text-center'><a href="/products">{cat.name}</a></li>
            </>)
          })
        }
      </ul>
      <div className='lg:w-1/12 flex row items-center space-x-2'>
        <div>
          <span><a href="/login">Login</a> / <a href="">SingUp</a></span>
        </div>
      </div>
      <div className='w-1/12'>
        <a href=""><img src="/shopping_cart.png" alt="" className='w-12 right-0'/></a>
      </div>
    </div>
  )
}

export default NavBarComponent