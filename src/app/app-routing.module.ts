import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
//import { MenupageComponent } from './menupage/menupage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Pagenotfound404Component } from './pagenotfound404/pagenotfound404.component';
import { RegisterComponent } from './register/register.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { TrainerregisterComponent } from './trainerregister/trainerregister.component';

const routes: Routes = [
  {path:'',   component:HomepageComponent},
  {path:'register',component:RegisterComponent},
  {path:'userlist',component:UserlistComponent},
  {path:'userlogin',component:UserloginComponent},
  {path:'itemlist',component:ItemlistComponent},
  {path:'pg1',component:Page1Component},
  {path:'pg2',component:Page2Component},
  {path:'pg3',component:Page3Component},
  {path:'pg4',component:Page4Component},
  {path:'ang',component:AppComponent},
  {path:'trainerregister',component:TrainerregisterComponent},
  {path:'homepage', component:HomepageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
