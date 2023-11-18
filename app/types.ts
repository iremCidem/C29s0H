export interface IDataProps {
  name: string;
  email: string;
  password: string;
}

export interface IBooksCategory {
  id: number;
  name: string;
  created_at: string;
}

export interface IBookDetail {
  author: string;
  cover: string;
  created_at: string;
  description: string;
  id: number;
  name: string;
  price: number;
  sales: number;
  slug: string;
  likes_aggregate: {
    aggregate: {
      count: number;
    };
  };
}

export interface IBooksWithCategories {
  category: IBooksCategory;
  products: IBookDetail;
}
