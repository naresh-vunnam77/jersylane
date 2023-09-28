import {NgModule} from '@angular/core'
import {Routes,RouterModule} from '@angular/router'
import { AboutComponent } from './pages/about/about.component'
import { CartComponent } from './pages/cart/cart.component'
import { CollectionListComponent } from './pages/collection-list/collection-list.component'
import { ContactusComponent } from './pages/contactus/contactus.component'
import { ProfileComponent } from './pages/profile/profile.component'
import { SigninComponent } from './pages/signin/signin.component'
import { SignupComponent } from './pages/signup/signup.component'
import { HomeComponent } from './pages/home/home.component'
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'
import { JerseyComponent } from './components/jersey/jersey.component'
import { CheckoutComponent } from './pages/cart/checkout/checkout.component'

const appRoutes:Routes = [
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'about',component:AboutComponent},
    {path:'cart',component:CartComponent,children:[
        {path:'checkout',component:CheckoutComponent}
    ]},
    {path:'collectionlist',component:CollectionListComponent},
    {path:'jersey/:id',component:JerseyComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'profile',component:ProfileComponent},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'**',component:PageNotFoundComponent}

]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}