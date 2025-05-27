export interface FormOrder {
  name: string;
  last_name: string;
  phone: string;
  country: string;
  zip: string;
  product: string;
  address: string;
  comment?: string;
}

export interface OrderResponse {
  success: number;
}
