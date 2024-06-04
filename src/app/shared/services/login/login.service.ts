import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { IToken } from '../../../shared/interfaces/Token/token.interfaces';
import { ILoginData } from '../../../shared/interfaces/login-data/login-data.interfaces';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class LoginService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  login({ email, password }: ILoginData, stayConnected?: boolean) {
    return this.http
      .post<IToken>(`${this.apiUrl}user/login`, { email, password })
      .pipe(
        tap((value) => {
          sessionStorage.setItem('accessToken', JSON.stringify(value.token));

        })
      );
  }

  async isLoggedIn(token: string): Promise<boolean> {
    return this.http
      .get(`${this.apiUrl}user/isLoggedIn`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        observe: 'response',
      })
      .pipe()
      .toPromise()
      .then((response: HttpResponse<any> | any) => {
        if (response?.body?.isLoggedIn) {
          return true;
        }
        return false;
      }).catch(() => {
        return false;
      });
  }

  getToken(): string | null {
    return sessionStorage.getItem('accessToken');
  }


  logout(): void {
    sessionStorage.removeItem('accessToken');
  }
}
