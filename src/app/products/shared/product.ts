import { BaseModel } from '../../shared/base.model';

export class Product {
  $key: string;
  name: string;
  category: string;
  price: number;
  constructor(values: Object = {}) {

    Object.assign(this, values);

  };

}
