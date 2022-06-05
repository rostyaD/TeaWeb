import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tea } from './data';
import { teaTypes } from './data';

@Injectable({
  providedIn: 'root'
})
export class TeaTypesService {
  constructor() { }
  private teaType = teaTypes;

  getTea(): tea[] {
    return this.teaType;
  }

  getThisTea(name:string|any) {
  let tea =  this.getTea().filter(tea => tea.name == name)
  return tea
  }

  gettea(): Observable<tea[]>{
    const teas = of(this.teaType)
    return teas
  }
}
