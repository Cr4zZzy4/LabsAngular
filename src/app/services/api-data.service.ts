import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Data } from '../models/data.model';

@Injectable({
  providedIn: 'root'
})
export class ApiDataService {
  private apiUrl = 'https://api.restful-api.dev/objects';

  constructor(private http: HttpClient) {}

  getData(): Observable<Data[]> {
  return this.http.get<any>(this.apiUrl).pipe(
    map(response => response.map((item: any) => ({
      id: item.id,
      title: item.name,
      description: item.data?.description || '',
      createdAt: item.createdAt ? new Date(item.createdAt) : undefined
    })))
  );
}


  addData(item: Data): Observable<Data> {
  const payload = {
    name: item.title,
    data: {
      description: item.description
    }
  };

  return this.http.post<any>(this.apiUrl, payload).pipe(
    map(res => ({
      id: res.id,
      title: res.name,
      description: res.data?.description || '',
      createdAt: res.createdAt ? new Date(res.createdAt) : undefined
    }))
  );
}


  deleteData(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}