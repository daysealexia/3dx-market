import React from 'react';
import Logo from '@/assets/logo.png';
import User from '@/assets/user.png';
import Bag from '@/assets/bag.png'
import Image from 'next/image';
import Link from 'next/link';


interface HeaderProps {
  user: null; // Use o tipo User ou o tipo correto para os dados do usuário
  isLoggedIn: boolean;
}

const MenuHeader: React.FC<HeaderProps> = ({ user, isLoggedIn }) => {
  return (
    <header className='flex justify-around items-center'>
      <div className='h-34 w-36' >
        <Image src={Logo} alt={'logo'} />
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
        <Link href='/'>
        <Image src={Bag} alt={'bag'}  />
        </Link>
        </div>
        
     
        
        
    
      </div>
      
    </header>
  );
};

export default MenuHeader;
