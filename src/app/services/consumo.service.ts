import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Data, DataResponse } from '../models/data.models';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {


  constructor(private http: HttpClient) {
    console.log("corriendo");
   }

   getConsumo(){
     const url= `../../assets/data/DATA.json`;

      return this.http.get<DataResponse>(url).pipe(
        map(
          resp => {
            return resp;
          }
        )
      )
    }

  }
