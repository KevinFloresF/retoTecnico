import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { HeaderComponent } from './header/header.component';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    LoadingComponent,
    HeaderComponent,
    LoadingComponent

  ],
  imports: [
    ButtonModule
    
  ],
  exports: [   
    LoadingComponent,
    HeaderComponent,
    LoadingComponent
  ]
})
export class CommonsModule { }