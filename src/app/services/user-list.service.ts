import { Injectable } from '@angular/core';
import { IListUser } from '../configs/models/IListUser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserListService {

  userList: IListUser

  constructor(private _http: HttpClient) { }

  getListUsers(): Observable<IListUser[]> {
    return this._http.get<IListUser[]>(`${environment.api}`);
  }
}
