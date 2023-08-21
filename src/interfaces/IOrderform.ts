
export interface Delivery {
  days: string;
  value: string;
}

export interface Shipping {
  delivery: Delivery | null;
  pickup: boolean;
}

export interface Product {
  id: string;
  image: string;
  name: string;
  listPrice: string;
  price: string;
  shipping: {
    delivery: {
      days: string;
      value: string;
    } | null;
    pickup: boolean;
  };
}

export interface OrderForm {
  id: string;
  products: Product[];
}

export interface Products {
  products: Product[];
}

export interface DataResponse {
  orderForm: OrderForm;
}

export interface ProductListProps {
  products: Product[];
}

export interface ProductCardProps {
    id: string;
    image: string;
    listPrice: string;
    price: string;
    shipping: Shipping;
    name: string;
    setProducts: React.Dispatch<React.SetStateAction<Product[] | null>>;
    products: Product[];
  }

