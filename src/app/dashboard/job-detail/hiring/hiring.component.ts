import { Component, OnInit } from '@angular/core';
import { hiringTabs } from './hiringTabs';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.scss']
})

export class HiringComponent implements OnInit {

  constructor() { }

  hiringTabs: any = hiringTabs;

  ngOnInit() { }

}
