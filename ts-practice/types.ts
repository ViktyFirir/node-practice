export interface User {
  id: number;
  name: string;
  age: number;
  city: string;
  orders: number[];
}

export interface ApiUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
  };
}