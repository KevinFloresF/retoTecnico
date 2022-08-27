import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes:Routes =[
    {
        path:'',
        children:[
            {
             path:'',redirectTo:'agencies',pathMatch:'full'
            },
            {
                path:'agencies',
                loadChildren:()=> 
                import('./agencies/agencies.module').then((m)=>m.AgenciesModule)
            }
            
           
        ]
        
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ViewsRoutingModule{}