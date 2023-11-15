import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { InvestmentEntity } from '../types/investmentEntity';

const API_URL = `${environment.apiUrl}/investors`;

@Injectable({
  providedIn: 'root',
})
export class InvestorsService {
  constructor(private http: HttpClient) {}

  getAllInvestors(): Observable<InvestmentEntity[]> {
    return this.http.get<InvestmentEntity[]>(API_URL);
  }

  getPaginatedInvestors(page: number) {
    return this.http.get<InvestmentEntity[]>(`${API_URL}?page=${page}`);
  }
}
