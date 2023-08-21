export interface MinicartItem {
    id: number;
    imageUrl: string;
    name: string;
    units: number;
    price: number;
  }

  export type Product = {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
    listPrice: number;
    quantityPerWeight: string;
    weightInStock: string;
  };