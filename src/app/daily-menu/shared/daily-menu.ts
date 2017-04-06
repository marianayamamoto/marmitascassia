import { Product } from '../../products/shared/product';
export class DailyMenu {
  $key: string;
  date: Date;
  mains: Product[];
  siders: Product[];
  drinks: Product[];
  mistura: Product[];
  constructor(values: Object = {}) {

    Object.assign(this, values);

  };

}
