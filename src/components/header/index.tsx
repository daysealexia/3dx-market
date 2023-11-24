import React, { useEffect, useState } from 'react';
import Logo from '@/assets/logo.png';
import User from '@/assets/user.png';
import Bag from '@/assets/bag.png';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  user: null; 
  isLoggedIn: boolean;
}

const MenuHeader: React.FC<HeaderProps> = ({ user, isLoggedIn }) => {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const updateCartItemsCount = () => {
      const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
      setCartItemsCount(storedCartItems.length);
    };

    updateCartItemsCount();

   
    window.addEventListener('storage', updateCartItemsCount);


    return () => {
      window.removeEventListener('storage', updateCartItemsCount);
    };
  }, []);

  return (
    <header className='flex justify-around items-center'>
      <div className='h-34 w-36' >
        <Link href='/'>
          <Image src={Logo} alt={'logo'} />
        </Link>
      </div>

      <nav>
        <ul className='flex justify-between'>
          <li>
            <a>Rings</a>
          </li>
          <li className='ml-6'>
            <a>Necklaces</a>
          </li>
          <li className='ml-6'>
            <a>Earrings</a>
          </li>
        </ul>
      </nav>
      <div className='flex' >
        <div className='h-6 w-6'>
          <Link href='/login'>
            <Image src={User} alt={'user'} />
          </Link>
        </div>
        <div className='h-6 w-6 ml-4'>
          <Link href='/addToCart'className='relative'>
            <Image src={Bag} alt={'bag'} />
            {cartItemsCount > 0 && <span className='bg-red-500 rounded-full text-white text-xs px-2 py-1 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2'>{cartItemsCount}</span>}
          </Link>
        </div>
      </div>     
    </header>
  );
};

export default MenuHeader;
