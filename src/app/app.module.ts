import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { LoadingComponent } from './commons/loading/loading.component';
import { NotFoundComponent } from './commons/not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    CommonsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    VirtualScrollerModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
