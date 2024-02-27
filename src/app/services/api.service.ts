import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MakeRequestOptions, Params } from '../models/Request.model';
import { environment } from '../../environments/environment';
import { Response } from '../models/Response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService<T = unknown> {
  constructor(private http: HttpClient) {}

  fetch<M = unknown>(options: MakeRequestOptions<M>) {
    const url = environment.BASE_URL;
    const params = this.generateQueryParams(options?.params);
    const headers = this.generateHeaders(options?.headers);
    const method = String(options?.method || 'GET').toLocaleLowerCase();
    const finalUrl = `${url}${options.endpoint}${params}`;

    return this.http.request<Response<T>>(method, finalUrl, {
      body: options?.data,
      headers,
    });
  }

  private generateQueryParams(params?: Params): string {
    if (!params) return '';
    if (Object.keys(params).length === 0) return '';

    const result = new URLSearchParams(params);

    return result ? '?' + result : '';
  }

  private generateHeaders(headers?: HttpHeaders): HttpHeaders {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');

    if (headers) {
      headers.keys().forEach((key) => {
        header.append(key, headers.get(key) || '');
      });
    }

    return header;
  }
}
