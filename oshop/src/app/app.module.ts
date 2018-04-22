import { UserService } from './user.service';
import { AuthGuardService } from './auth-guard.service';
import { AuthService } from './auth.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {CustomFormsModule} from 'ng2-validation';

import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { MyOrderComponent } from './my-order/my-order.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrderComponent } from './admin/admin-order/admin-order.component';
import { LoginComponent } from './login/login.component';
import { Component } from '@angular/core/src/metadata/directives';
import { AdminAuthGaurdService } from './admin-auth-gaurd.service';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { CategoryService } from './category.service';
import { ProductService } from './product.service';



@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrderComponent,
    AdminProductsComponent,
    AdminOrderComponent,
    LoginComponent,
    ProductFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'shopping-cart', component: ShoppingCartComponent },
      { path: 'login', component: LoginComponent },
      { path: 'check-out', component: CheckOutComponent, canActivate: [AuthGuardService] },
      { path: 'order-success', component: OrderSuccessComponent, canActivate: [AuthGuardService] },
      { path: 'my/order', component: MyOrderComponent, canActivate: [AuthGuardService] },
      {
        path: 'admin/product',
        component: AdminProductsComponent,
        canActivate: [AuthGuardService, AdminAuthGaurdService]
      },
      {
        path: 'adim/product/new',
        component: ProductFormComponent,
        canActivate: [AuthGuardService, AdminAuthGaurdService]
      },
      {
        path: 'admin/order',
        component: AdminOrderComponent,
        canActivate: [AuthGuardService, AdminAuthGaurdService]
      }




    ])

  ],
  providers: [AuthService,
    AuthGuardService,
    UserService,
    AdminAuthGaurdService,
    CategoryService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
