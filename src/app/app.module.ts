import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CakesComponent } from './cakes/cakes.component';
import { CakeDetailsComponent } from './cake-details/cake-details.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FranchiseComponent } from './franchise/franchise.component';
import { SigninComponent } from './signin/signin.component';
import { RegisterComponent } from './register/register.component';
import { CartComponent } from './cart/cart.component';
import { StepSigninComponent } from './step-signin/step-signin.component';
import { StepDeliveryComponent } from './step-delivery/step-delivery.component';
import { StepPaymentComponent } from './step-payment/step-payment.component';
import { StepReivewComponent } from './step-reivew/step-reivew.component';
import { AccountComponent } from './account/account.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    HeaderComponent,
    FooterComponent,
    CakesComponent,
    CakeDetailsComponent,
    ContactComponent,
    AboutComponent,
    FranchiseComponent,
    SigninComponent,
    RegisterComponent,
    CartComponent,
    StepSigninComponent,
    StepDeliveryComponent,
    StepPaymentComponent,
    StepReivewComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponentComponent},
      {path: 'cakes', component: CakesComponent},
      {path: 'cakes-details', component: CakeDetailsComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'cart', component: CartComponent},
      {path: 'account', component: AccountComponent},
      {path: 'about', component: AboutComponent},
      {path: 'login', component: SigninComponent},
      {path: 'signup', component: RegisterComponent},
      {path: 'order/1', component: StepSigninComponent},
      {path: 'order/2', component: StepDeliveryComponent},
      {path: 'order/3', component: StepPaymentComponent},
      {path: 'order/4', component: StepReivewComponent},
      { path: '', redirectTo: '/home', pathMatch: 'full' },
    ]),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
