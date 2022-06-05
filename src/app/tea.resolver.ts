import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, NEVER } from 'rxjs';
import { TeaTypesService } from './tea-types.service';

@Injectable({
  providedIn: 'root'
})
export class TeaResolver implements Resolve<boolean> {
  constructor(private service: TeaTypesService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any | Observable<any> {
      return this.service.getThisTea(route.paramMap.get('name'))
  }
}
