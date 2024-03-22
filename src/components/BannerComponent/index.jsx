'use client';
import React, { memo, useEffect, useState } from 'react';

const BannerComponent = memo(() => {

  const [screenWidth, setScreenWidth] = useState(1000);

  useEffect(() => {
    return () => {
      setScreenWidth(window.innerWidth);
    }
  }, [])
  

  return (
    <div className='p-6 realtive'>
      <img
        src="/banner1.png"
        alt="Banner"
        className="w-100 rounded-lg left-0 right-0"
      />
    </div>
  )
})

export default BannerComponent