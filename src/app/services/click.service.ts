import { Injectable } from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {LogService} from "./log.service";

@Injectable()
export class ClickService {

  private sumClicks = 0;
  private sum = new Subject<number>();

  constructor(protected logService: LogService) { }

  addClicks() {
    this.sumClicks++;
    this.sum.next(this.sumClicks);
    this.logService.logger('click!');
  }

  getSum(): Observable<number> {
    return this.sum.asObservable();
  }

}
