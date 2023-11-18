import { IRequestModel } from './types';
import { apiRequest } from './request';
import endpoints from './endpoints';

export const registerService: IRequestModel = (data) => apiRequest.post(endpoints.userRegister(), data);
export const bookCategoriesService: IRequestModel = () => apiRequest.get(endpoints.bookCategories());
export const getBooksByCategoryIdService: IRequestModel = (data) => apiRequest.get(endpoints.booksByCategoryId(data));
