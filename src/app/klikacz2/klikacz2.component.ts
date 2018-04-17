import { Component, OnInit } from '@angular/core';
import {ClickService} from "../services/click.service";

@Component({
  selector: 'app-klikacz2',
  templateUrl: './klikacz2.component.html',
  styleUrls: ['./klikacz2.component.css'],
})
export class Klikacz2Component implements OnInit {

  click = 0;

  constructor(private clickService: ClickService) { }

  ngOnInit() {
  }

  add() {
    this.click++;
    this.clickService.addClicks();
  }

}
