import {ApiResponse, RequestOptions} from "../models/Api";
import {api} from "./HTTPClient";

export const get = <T>(options: RequestOptions) => {
  return api
    .get<T>(options.path, {params: options.query})
    .then(res => {
      return res as ApiResponse<T>;
    })
    .catch(error => {
      throw new Error(error);
    });
};
