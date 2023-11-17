import { AxiosRequestConfig } from 'axios';

export type AxiosResponse<T = any> = {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: any;
  request?: any;
};

export interface IRequestHandlerParams<TRequest> {
  options?: Record<string, string>;
  axiosConfig?: AxiosRequestConfig<TRequest>;
  data: TRequest;
}

export type RequestHandler<TRequest = null> = (params: IRequestHandlerParams<TRequest>) => Promise<AxiosResponse>;

export interface IRequestModel {
  /**
   *
   * @param {D} data
   * @param {AxiosRequestConfig} config
   * @returns {Promise<AxiosResponse<R>>}
   */ <R, D = void>(data?: D, config?: AxiosRequestConfig): Promise<AxiosResponse<R>>;
}
