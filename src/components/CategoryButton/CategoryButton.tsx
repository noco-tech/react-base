/* eslint-disable react/button-has-type */
/* eslint-disable import/no-cycle */
import React, { FC, useContext } from 'react';

import { handleCategoryContext } from '../../pages/home/HomePage';
import './CategoryButton.scss';

const CategoryButton: FC<{ children: string }> = ({ children }) => {
  const { category, handleCategory } = useContext(handleCategoryContext);

  return (
    <button
      className={category === children ? 'clicked' : 'unclicked'}
      onClick={() => handleCategory(children)}
    >
      {children}
    </button>
  );
};

export default CategoryButton;
