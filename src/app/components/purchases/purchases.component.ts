import { Component, OnInit } from '@angular/core';
import { BuyersService } from '../../services/buyers.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Buyers } from '../../model/buyer';


@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.component.html',
  styleUrls: ['./purchases.component.css']
})
export class PurchasesComponent implements OnInit {
  buyer: Buyers;

  constructor(private buyersService: BuyersService, private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let id = +this.route.snapshot.paramMap.get('id');
        this.buyer = this.buyersService.getBuyer(id);
  }

}
