import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonsModule } from "src/app/commons/commons.module";
import { AgenciesListComponent } from "./agencies-list/agencies-list.component";
import { AgenciesRoutingModule } from "./agencies-routing.module";
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { ButtonModule } from "primeng/button";
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {TableModule} from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { AgenciesService } from "./services/agencies.service";
import { environment } from "src/environments/environment";
import { AgenciesMock } from "./services/mocks/agencies.mock";
import { AgenciesBackend } from "./services/backend/agencies.backend";
import { SidebarModule } from "primeng/sidebar";
import { GMapModule } from "primeng/gmap";
import { DialogService, DynamicDialogConfig, DynamicDialogModule, DynamicDialogRef } from "primeng/dynamicdialog";
import { AgenciesMainComponent } from './components/agencies-main/agencies-main.component';
@NgModule({
    providers: [DialogService,DynamicDialogRef,DynamicDialogConfig,{
        provide: AgenciesService,
        useClass: environment.allowMocks? AgenciesMock : AgenciesBackend,
    }],
    declarations:[
        AgenciesListComponent,
        AgenciesMainComponent
    ],
    imports:[
        CommonModule,
        AgenciesRoutingModule,
        CommonsModule,
        VirtualScrollerModule,
        ButtonModule,
        InputTextModule,
        DropdownModule,
        FormsModule,
        TableModule,
        DialogModule,
        SidebarModule,
        GMapModule,
        DynamicDialogModule,
        ReactiveFormsModule
    ]
})
export class AgenciesModule { }