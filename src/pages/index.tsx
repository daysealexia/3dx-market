import { EcommerceCard } from '@/components/card'
import { CarouselDefault } from '@/components/carousel'
import { Inter } from 'next/font/google'
import Products from '@/data/products.json'
import MenuHeader from '@/components/header'
import { FooterWithSitemap } from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <div>
      <MenuHeader user={null} isLoggedIn={false}/>
      
      <CarouselDefault />

      <div className='containerCard'>
        {Products.map((product) => (
          <EcommerceCard name={product.name}   description= {product.description}  price= {product.price}  image={product.image} />
        ))}
      </div>
      
      <FooterWithSitemap/>
    </div>
  )
}
