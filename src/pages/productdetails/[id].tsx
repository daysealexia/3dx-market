import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Products from '@/data/products.json';
import MenuHeader from '@/components/header';
import { FooterWithSitemap } from '@/components/footer';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
};

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    
    const foundProduct = Products.find((p) => p.id === parseInt(id as string, 10));

  
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id]);

  const addToCart = () => {
    
    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');

    const updatedCart = [...cartItems, product];
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
    setAddedToCart(true);
  };

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div>
      <MenuHeader user={null} isLoggedIn={false}/>
      <div className="container mx-auto p-4">
      <div className="md:flex md:items-center">
        <div className="md:w-1/2">
          <img src={product.image} alt={product.name} className="rounded-lg shadow-md" />
        </div>
        <div className="md:w-1/2 md:ml-6 mt-4 md:mt-0">
          <h1 className="text-3xl font-semibold">{product.name}</h1>
          <p className="text-gray-700 text-lg mt-2">{product.description}</p>
          <p className="text-gray-900 text-2xl font-semibold mt-4">
            $ {product.price}
          </p>
          {!addedToCart ? (
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
          onClick={addToCart}
        >
          Adicionar ao Carrinho
        </button>
      ) : (
        <p className="text-green-500 mt-4">Produto adicionado ao carrinho!</p>
      )}
        </div>
      </div>
      <FooterWithSitemap/>
    </div>
    
    </div>
    
  );
};

export default ProductPage;
