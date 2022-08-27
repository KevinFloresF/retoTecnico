import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { CommonsModule } from "src/app/commons/commons.module";
import { AgenciesListComponent } from "./agencies-list/agencies-list.component";
import { AgenciesRoutingModule } from "./agencies-routing.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {VirtualScrollerModule} from 'primeng/virtualscroller';
import { ButtonModule } from "primeng/button";
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from "@angular/forms";
import {TableModule} from 'primeng/table';
import { AgenciesService } from "./services/agencies.service";
import { environment } from "src/environments/environment";
import { AgenciesMock } from "./services/mocks/agencies.mock";
import { AgenciesBackend } from "./services/backend/agencies.backend";
@NgModule({
    providers: [{
        provide: AgenciesService,
        useClass: environment.allowMocks? AgenciesMock : AgenciesBackend,
    }],
    declarations:[
        AgenciesListComponent
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
        TableModule

    
    ]
})
export class AgenciesModule { }