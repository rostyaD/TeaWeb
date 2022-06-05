import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { tea } from '../data';
import { TeaTypesService } from '../tea-types.service';

@Component({
  selector: 'app-tea-type-info',
  templateUrl: './tea-type-info.component.html',
  styleUrls: ['./tea-type-info.component.sass']
})
export class TeaTypeInfoComponent implements OnInit {
  typesOfTea : tea[] = [];
  teaTypes : tea[]= [];
  tea : any;

  constructor(
    private service: TeaTypesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {}

  getType() : void {
    this.service.gettea()
    .subscribe(
      teaTypes => this.teaTypes = teaTypes
    )
  }

  goBack(): void {
    this.router.navigate([''])
  }

  ngOnInit(): void {
    this.tea = this.activatedRoute.snapshot.params
    this.teaTypes = this.service.getTea()
    this.activatedRoute.data.subscribe(data => {
      this.typesOfTea = data['tea']
    })
  }
}
