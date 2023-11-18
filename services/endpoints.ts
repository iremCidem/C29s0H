// eslint-disable-next-line import/no-anonymous-default-export
export default {
  userRegister: () => '/register',
  bookCategories: () => '/categories',
  booksByCategoryId: (data: any) => `/products/${data}`,
};
