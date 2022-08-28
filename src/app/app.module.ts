import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonsModule } from './commons/commons.module';
import { SidebarModule } from 'primeng/sidebar';
import {GMapModule} from 'primeng/gmap';
import { DialogService, DynamicDialogConfig, DynamicDialogModule } from 'primeng/dynamicdialog';
import { InterceptorService } from './business/views/agencies/services/interceptor/api.interceptor.service';
@NgModule({
  declarations: [
    AppComponent,
    
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
    FormsModule,
    BrowserAnimationsModule,
    SidebarModule,
    GMapModule,
    DynamicDialogModule,
    ReactiveFormsModule
  ],
  providers: [DialogService,{
    provide: HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
