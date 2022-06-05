import { Component, OnInit } from '@angular/core';
import { tea } from '../data';
import { TeaTypesService } from '../tea-types.service';

@Component({
  selector: 'app-tea-type',
  templateUrl: './tea-type.component.html',
  styleUrls: ['./tea-type.component.sass']
})
export class TeaTypeComponent implements OnInit {

  teaTypes : tea[]= [];
  constructor(
    private service: TeaTypesService
    ) { }

  getType() : void {
    this.teaTypes = this.service.getTea();
  }
  ngOnInit(): void {
    this.getType()
  }

}
