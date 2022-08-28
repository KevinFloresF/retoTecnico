import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgenciesListComponent } from "./agencies-list/agencies-list.component";
import { AgenciesMainComponent } from "./components/agencies-main/agencies-main.component";

const routes: Routes =[
    {
        path:'',
        component: AgenciesMainComponent
    },    
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgenciesRoutingModule{}