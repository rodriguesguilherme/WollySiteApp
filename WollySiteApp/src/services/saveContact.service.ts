import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormModel } from 'src/models/formModel.model';

import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SaveContactService {

  private readonly API = 'https://5dcaaa8d34d54a0014314849.mockapi.io/api/v1/users';

  constructor(private http: HttpClient) { }

  save(dados) {
    return this.http.post<FormModel[]>(this.API, dados).pipe(take(1));
  }


}
