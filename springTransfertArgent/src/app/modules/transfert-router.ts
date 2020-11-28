import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransfertComponent } from './transfert/transfert.component';

const routes : Routes =[
    {
        path : "Transfert",
        component : TransfertComponent
    },
    {
        path : "Transfert/add",
        component : TransfertComponent
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class TransfertRouter {
}
