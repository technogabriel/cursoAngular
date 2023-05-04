import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';

const routes: Routes=[
  {
    path:'pagina1',
    component: Page1Component,
    title:'Pagina 1 -clase2'
  },
  {
    path:'pagina2/:id',
    component:Page2Component,
    title:'Pagina 2 -clase2',
    data:{
      alumno:'Adan',
      alumno2:'Gabriel'
    }
  },
  {
    path:'',
    redirectTo:'pagina1',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
