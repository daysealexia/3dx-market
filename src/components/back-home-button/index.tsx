import React from 'react';

const BackToHomeButton: React.FC<any> = () => {
  return (
    <div>
      <a href='/'className='w-16 h-16 rounded-full background-button p-4 absolute flex items-center justify-center right-2 bottom-2 '>HOME</a>
    </div>
  );
};

export default BackToHomeButton;
