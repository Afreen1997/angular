import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenupageComponent } from './menupage/menupage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Pagenotfound404Component } from './pagenotfound404/pagenotfound404.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserlistComponent } from './userlist/userlist.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { ItemlistComponent } from './itemlist/itemlist.component';
import { TrainerregisterComponent } from './trainerregister/trainerregister.component';

@NgModule({
  declarations: [
    AppComponent,
    MenupageComponent,
    HomepageComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Pagenotfound404Component,
    Page4Component,
    RegisterComponent,
    UserlistComponent,
    UserloginComponent,
    ItemlistComponent,
    TrainerregisterComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [MenupageComponent]
})
export class AppModule { }
