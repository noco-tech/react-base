/* eslint-disable arrow-body-style */
/* eslint-disable import/no-cycle */

import CategoryButton from '../CategoryButton/CategoryButton';
import { categories } from '../../categoryList';
import './Category.scss';

const Category = () => {
  return (
    <div className="category">
      {categories.map((category) => (
        <CategoryButton key={category}>{category}</CategoryButton>
      ))}
    </div>
  );
};

export default Category;
