import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './commons/not-found/not-found.component';

const routes: Routes = [
 
  {
    path:'',
    loadChildren:()=>
      import('./business/views/views.module')
    .then((m)=> m.ViewsModule)
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
