import { IRequestModel } from './types';
import { apiRequest } from './request';
import endpoints from './endpoints';

export const registerService: IRequestModel = (data) => apiRequest.post(endpoints.userRegister(), data);
