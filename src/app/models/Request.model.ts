import { HttpHeaders } from '@angular/common/http';

export interface Params {
  [k: string]: string;
}

export type METHOD = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface MakeRequestOptions<T = unknown> {
  endpoint: string;
  params?: Params;
  method?: METHOD;
  data?: T;
  headers?: HttpHeaders;
}
