
export class Category {
  $key: string;
  name: string;
  category: string;
  price: number;
  constructor(values: Object = {}) {

    Object.assign(this, values);

  };

}
