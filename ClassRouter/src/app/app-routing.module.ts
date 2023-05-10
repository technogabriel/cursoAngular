import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { ChildOnePage1Component } from './pages/page1/child-one-page1/child-one-page1.component';
import { ChildTwoPage1Component } from './pages/page1/child-two-page1/child-two-page1.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: 'pagina1',
    title: 'Pagina 1 -clase2',
    children: [{
      path: 'child1',
      loadChildren:() => import('./pages/page1/child-one-page1/child-one-page1.module').then(m => m.ChildOnePage1Module)
    },
    {
      path: 'child2',
      loadChildren:() => import('./pages/page1/child-two-page1/child-two-page1.module').then(m => m.ChildTwoPage1Module)
    },
    {
      path: '',
      component: Page1Component,
      title: 'Pagina 1 -clase2'
    }
  ]
  },
  {
    path: 'pagina2/:id',
    component: Page2Component,
    title: 'Pagina 2 -clase2',
    data: {
      alumno: 'Adan',
      alumno2: 'Gabriel'
    },
    canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'pagina1',
    pathMatch: 'full'
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
