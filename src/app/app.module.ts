import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CollectionListComponent } from './pages/collection-list/collection-list.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutComponent } from './pages/about/about.component';
import { HeroComponent } from './components/hero/hero.component';
import { OffersComponent } from './components/offers/offers.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { SignupComponent } from './pages/signup/signup.component';
import { SigninComponent } from './pages/signin/signin.component';
import { JerseyComponent } from './components/jersey/jersey.component';
import { CartComponent } from './pages/cart/cart.component';
import { CheckoutComponent } from './pages/cart/checkout/checkout.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { OrdersComponent } from './pages/profile/orders/orders.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { DropdownComponent } from './components/shared/dropdown/dropdown.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CollectionListComponent,
    ContactusComponent,
    AboutComponent,
    HeroComponent,
    OffersComponent,
    FeaturesComponent,
    TestimonialsComponent,
    SignupComponent,
    SigninComponent,
    JerseyComponent,
    CartComponent,
    CheckoutComponent,
    ProfileComponent,
    OrdersComponent,
    HomeComponent,
    DropdownComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
