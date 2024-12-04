import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';

export class Http {
  readonly apiBaseUrl: string = 'https://localhost:44381/api';

  constructor(private http: HttpClient) {}

  get<T>(path: string, params?: any): Observable<T> {
    return this.http.get<T>(`${this.apiBaseUrl}/${path}`, { params });
  }

  post<T>(path: string, body: any | null): Observable<T> {
    return this.http.post<T>(`${this.apiBaseUrl}/${path}`, body);
  }

  put<T>(path: string, body: any | null): Observable<T> {
    return this.http.put<T>(`${this.apiBaseUrl}/${path}`, body);
  }

  delete<T>(path: string, id: number | string): Observable<T> {
    return this.http.delete<T>(`${this.apiBaseUrl}/${path}/${id}`);
  }

  deleteAll<T>(path: string, body: any): Observable<T> {
    return this.http.delete<T>(`${this.apiBaseUrl}/${path}`, { body });
  }

  getPaged<T>(path: string, params?: HttpParams): Observable<HttpResponse<T>> {
    return this.http.get<T>(`${this.apiBaseUrl}/${path}`, {
      params: params,
      observe: 'response',
    });
  }

  downloadDto(path: string, dto?: any, params?: any): Observable<Blob> {
    debugger;
    return this.http.post(`${this.apiBaseUrl}/${path}`, dto, {
      responseType: 'blob',
      params: params,
    });
  }

  download(path: string, params?: any): Observable<Blob> {
    return this.http.post(
      `${this.apiBaseUrl}/${path}`,
      {},
      {
        responseType: 'blob',
        params: params,
      }
    );
  }
}
