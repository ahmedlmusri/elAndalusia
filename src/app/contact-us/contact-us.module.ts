import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { contactRoute } from './contact-us.rotuing';
import { SharedModule } from '../shared/shared/shared.module';



@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(contactRoute)
  ]
})
export class ContactUsModule { }
