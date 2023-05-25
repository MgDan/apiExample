import { state } from '@angular/animations';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Pokemon } from '../modess/general';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  public list:Pokemon[] = [];
  public value:string = "";

  constructor(private http:ApiService, private router:Router){}


  search(){
    this.http.searchByName(this.value).subscribe((data:Pokemon[])=>{
      console.log(data);
      if(data.length > 0){
        this.list = data;
        this.router.navigateByUrl('search/list',{state: this.list});
      }


    });
  }

}
