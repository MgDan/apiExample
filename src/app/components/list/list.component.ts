import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../modess/general';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public list:Pokemon[] = [];


  constructor(private router:Router){
    console.log(this.router.getCurrentNavigation()?.extras.state)

    this.list =  this.router.getCurrentNavigation()?.extras.state as Array<Pokemon> || [];

  }
  ngOnInit(): void {


  }

}
