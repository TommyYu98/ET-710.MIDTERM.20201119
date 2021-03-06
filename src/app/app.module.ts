import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { MyResumeComponent } from './my-resume/my-resume.component';
import { ResumeFooterComponent } from './my-resume/resume-footer/resume-footer.component';
import { ResumeEducationComponent } from './my-resume/resume-education/resume-education.component';
import { ResumeWorkExperienceComponent } from './my-resume/resume-work-experience/resume-work-experience.component';
import { ResumeProfileComponent } from './my-resume/resume-profile/resume-profile.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    MyResumeComponent,
    ResumeFooterComponent,
    ResumeEducationComponent,
    ResumeWorkExperienceComponent,
    ResumeProfileComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/