import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { SearchComponent } from './components/search/search.component';
import { ListComponent } from './components/list/list.component';
import { SingleComponent } from './components/single/single.component';

const routes: Routes = [
  {path:'', component:PrincipalComponent},
  {path:'search', component:SearchComponent, children:[
    {path:'list', component:ListComponent},
    {path:'single', component:SingleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
