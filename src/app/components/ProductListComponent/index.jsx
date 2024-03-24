import React from 'react'
import ProductCardComponent from '../ProductCardComponent'
import { useRouter } from 'next/navigation'


function ProductListComponent({category,products}) {
  const array = [
    {id:1,name:"Open Magazine Mockup V2 Isometric",image: "/producto1.png",price:15.00},
    {id:2,name:"product2",image: "/producto1.png",price:35.00},
    {id:3,name:"product3",image: "/producto1.png",price:25.00},
    {id:4,name:"product4",image: "/producto1.png",price:5.00},
    {id:5,name:"product5",image: "/producto1.png",price:155.00},
  ];
  /* const router = useRouter();
  const category_id = router.query.category_id; */

  //console.log("category_id",category_id);
  return (
    <div className='m-8'>
        <h1 className='text-4xl font-bold'>{category ? category : <>Categoria</>}</h1>
        <div className='w-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 py-4'>
          { 
            
            products && products.map(item => {
              return(
                <ProductCardComponent key={item._id} product={item}/>
              );
            })
          }
        </div>
    </div>
  )
}

export default ProductListComponent