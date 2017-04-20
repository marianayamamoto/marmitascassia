
export class Category {
  $key: string;
  id: string;
  name: string;
  isVisible: boolean;
  allowMultiple: boolean;
  constructor(values: Object = {}) {

    Object.assign(this, values);

  };

}
