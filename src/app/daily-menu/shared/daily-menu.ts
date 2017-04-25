import { Product } from '../../products/shared/product';
export class DailyMenu {
  $key: string;
  date: Date;
  siders: Product[];
  drinks: Product[];
  sides: Product[];
  constructor(values: Object = {}) {

    Object.assign(this, values);

  };

}
