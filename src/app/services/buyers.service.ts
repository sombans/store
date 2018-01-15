

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
        kupljeno: [{ naziv: 'jabuke' }, { naziv: 'grozdje'}]
      },
      {
        id: '2',
        ime: 'Daniel',
        prezime: 'Ros',
        email: 'daniel@example.com',
        kupljeno: [{ naziv: 'mleko' }, { naziv: 'pavlaka'}, { naziv: 'hleb'}]
      },
      {
        id: '3',
        ime: 'Martin',
        prezime: 'Hess',
        email: 'martin@mail.com',
        kupljeno: [{ naziv: 'votka'}, { naziv: 'pivo'}, { naziv: 'rakija'}]
      },
    ];
  }
  public getBuyers() {
    return this.buyers;
  }

  public addBuyer(newBuyer) {
    this.buyers.push(newBuyer);
  }
  getBuyer(id: number) {
    // tslint:disable-next-line:triple-equals
    return this.getBuyers().find(buyer => buyer.id == id);
  }

}

