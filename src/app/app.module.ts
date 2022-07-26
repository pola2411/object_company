import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedNavbarComponent } from './shared/shared-navbar/shared-navbar.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CEComponent } from './employees/ce/ce.component';
import { LEComponent } from './employees/le/le.component';
import { UEComponent } from './employees/ue/ue.component';
import { FormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShowmoreComponent } from './employees/showmore/showmore.component';
import { LcComponent } from './cutomer/lc/lc.component';
import { CcComponent } from './cutomer/cc/cc.component';
import { UcComponent } from './cutomer/uc/uc.component';
import { ShowcComponent } from './cutomer/showc/showc.component';
import { ListProductComponent } from './product/list-product/list-product.component';
import { CreatePrComponent } from './product/create-pr/create-pr.component';
import { NotfComponent } from './not/notf/notf.component';


@NgModule({
  declarations: [
    AppComponent,
    SharedNavbarComponent,
    MainHomeComponent,
    FooterComponent,
    CEComponent,
    LEComponent,
    UEComponent,
    ShowmoreComponent,
    LcComponent,
    CcComponent,
    UcComponent,
    ShowcComponent,
    ListProductComponent,
    CreatePrComponent,
    NotfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
