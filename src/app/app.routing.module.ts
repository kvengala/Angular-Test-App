import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './HomeComponent/home.component';

export const routes: Routes = [{
    path: '', redirectTo: 'home', pathMatch: 'full'
},
{
    path: 'home', component: HomeComponent
}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule { }
