import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoComponent} from './demo/demo.component';

// Step- 3 setting up routes
const routes: Routes = [
  { path:'', component:HomeComponent },
  { path:'demo', component:DemoComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Step-4 registering the routes configurations
  exports: [RouterModule]
})
export class AppRoutingModule { }
