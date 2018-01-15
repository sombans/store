import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../services/buyers.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-buyers-component',
  templateUrl: './buyers-component.component.html',
  styleUrls: ['./buyers-component.component.css']
})
export class BuyersComponentComponent implements OnInit {

  buyers = [];
  newBuyer = {};

  constructor(private _buyersService: BuyersService) {
    this.buyers = this._buyersService.getBuyers();
  }

  removeBuyer(buyer) {
    // tslint:disable-next-line:prefer-const
    let index = this.buyers.indexOf(buyer);
    this.buyers.splice(index, 1);
  }

  addBuyer() {
    this._buyersService.addBuyer(this.newBuyer);
    this.newBuyer = {};
  }

  ngOnInit() {
  }

}
