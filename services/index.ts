import { IRequestModel } from './types';
import { apiRequest } from './request';
import endpoints from './endpoints';

export const getRegisterService: IRequestModel = (data) => apiRequest.post(endpoints.userRegister(), data);
export const getBookCategoriesService: IRequestModel = () => apiRequest.get(endpoints.bookCategories());
export const getBooksByCategoryIdService: IRequestModel = (data) => apiRequest.get(endpoints.booksByCategoryId(data));
export const userLoginService: IRequestModel = (data) => apiRequest.post(endpoints.userLogin(), data);
