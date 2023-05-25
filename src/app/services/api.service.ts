import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs'
import { general } from '../components/modess/general';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint = 'https://pokeapi.co/api/v2/type';

  constructor(private http:HttpClient) { }

  searchByName(txt:String){

    return this.http.get<general>(`${this.endpoint}/${txt}`).pipe(map(data=>data.pokemon));

  }
}
