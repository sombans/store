

import { Injectable } from '@angular/core';
import { Products } from '../model/product';

@Injectable()
export class BuyersService {
  [x: string]: any;
  Buyers: any;
  buyers;


  constructor() {
    this.buyers = [
      {
        id: '1',
        ime: 'John',
        prezime: 'Doe',
        email: 'john@mail.com',
        kupljeno: []
      },
      {
        id: '2',
        ime: 'Daniel',
        prezime: 'Ros',
        email: 'daniel@example.com',
        kupljeno: []
      },
      {
        id: '3',
        ime: 'Martin',
        prezime: 'Hess',
        email: 'martin@mail.com',
        kupljeno: []
      },
    ];
  }
  public getBuyers() {
    return this.buyers;
  }

  public addBuyer(newBuyer) {
    this.buyers.push(newBuyer);
  }
}

