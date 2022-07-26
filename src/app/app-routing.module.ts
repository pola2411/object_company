import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CcComponent } from './cutomer/cc/cc.component';
import { LcComponent } from './cutomer/lc/lc.component';
import { ShowcComponent } from './cutomer/showc/showc.component';
import { UcComponent } from './cutomer/uc/uc.component';
import { CEComponent } from './employees/ce/ce.component';
import { LEComponent } from './employees/le/le.component';
import { ShowmoreComponent } from './employees/showmore/showmore.component';
import { UEComponent } from './employees/ue/ue.component';
import { MainHomeComponent } from './home/main-home/main-home.component';
import { NotfComponent } from './not/notf/notf.component';
import { CreatePrComponent } from './product/create-pr/create-pr.component';
import { ListProductComponent } from './product/list-product/list-product.component';


const routes: Routes = [
  {path:"" ,component:MainHomeComponent},
  {path:"home" ,component:MainHomeComponent},
  {path:"list_employees" , component:LEComponent},
  {path:"create_employees", component:CEComponent},
  {path:"showmore/:id", component:ShowmoreComponent},
  {path:"employee_update/:id", component:UEComponent},
  {path:"list_customer" , component: LcComponent},
  {path:"showc/:id", component:ShowcComponent},
  {path:"create_customer", component:CcComponent},
  {path:"customer_update/:id", component:UcComponent},
  {path:"list_product", component:ListProductComponent},
  {path:"create_product", component:CreatePrComponent},
  {path:"**", component:NotfComponent}


  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
