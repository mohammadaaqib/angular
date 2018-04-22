import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AUTH_PROVIDERS } from 'angularfire2/auth';

@Injectable()
export class ProductService {

  constructor(private db:AngularFireDatabase) { }
  create(product){
     return this.db.list('/products').push(product);
  }
getAllproduct(){
   return this.db.list('/products');
}
}
