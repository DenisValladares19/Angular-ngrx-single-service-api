export interface Response<T = unknown> {
  info: InfoModel;
  results: T;
}

export interface InfoModel {
  count: number;
  pages: number;
  next?: string;
  prev?: string;
}
