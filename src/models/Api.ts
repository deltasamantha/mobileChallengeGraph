export interface QueryParams {
  [x: string]: string;
}

export interface RequestOptions {
  path: string;
  query?: QueryParams;
}

export interface ApiResponse<T> {
  status?: number;
  // data: ApiData<T>;
  data: T;
}

// interface ApiData<T> {
//   results: T;
//   count?: number;
//   next?: string;
//   previous?: string;
// }
