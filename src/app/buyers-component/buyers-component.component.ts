import { Component, OnInit } from '@angular/core';
import { Buyers } from '../buyer';

@Component({
  selector: 'app-buyers-component',
  templateUrl: './buyers-component.component.html',
  styleUrls: ['./buyers-component.component.css']
})
export class BuyersComponentComponent implements OnInit {

  newBuyer = {};
  bayers: Array<Object>;

  constructor() {
    this.bayers[

      new Buyers('1', 'Marko', 'Markovic', 'marko@nesto.com', 'Product[]'),
      new Buyers('2', 'Petar', 'Peric', 'petric@vbca.com', 'Product[]'),
      new Buyers('3', 'Slavko', 'Slavkovic', 'SavaSavko@nbt.com', 'Product[]')

    ];
  }

  ngOnInit() {
  }

}
