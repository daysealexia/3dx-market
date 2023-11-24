import React from 'react';

import Products from '@/data/products.json';
import MenuHeader from '@/components/header'
import { EcommerceCard } from '@/components/card';
import { CarouselDefault } from '@/components/carousel';
import { FooterWithSitemap } from '@/components/footer';
import Link from 'next/link';



export default function Home() {
  return (

    <div>
      <MenuHeader user={null} isLoggedIn={false}/>
      
      <CarouselDefault />

      <div className='containerCard'>
        {Products.map((product) => (
          <EcommerceCard 
            key={product.id}
            id={product.id}
            name={product.name}
            description= {product.description}
            price= {product.price}
            image={product.image} />
          
        ))}
      </div>
      
      <FooterWithSitemap/>
    </div>
  )
}
