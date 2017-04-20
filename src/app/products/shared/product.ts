import { Category } from '../../category/shared/category';
export class Product {
  $key: string;
  name: string;
  category: Category;
  price: number;
  constructor(values: Object = {}) {

    Object.assign(this, values);

  };

}
