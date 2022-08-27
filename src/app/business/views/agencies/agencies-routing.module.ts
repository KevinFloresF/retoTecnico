import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AgenciesListComponent } from "./agencies-list/agencies-list.component";

const routes: Routes =[
    {
        path:'',
        component: AgenciesListComponent
    },
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgenciesRoutingModule{}