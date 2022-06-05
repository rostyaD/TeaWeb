import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { tea } from '../data';
import { TeaTypesService } from '../tea-types.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  teaTypes : tea[]= [];
  constructor(
    private service: TeaTypesService,
    private router: Router
    ) { }

  getType() : void {
    this.teaTypes = this.service.getTea();
  }

  ngOnInit(): void {
    this.getType()
  }
}
