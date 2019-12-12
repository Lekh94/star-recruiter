import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'pool-list',
  templateUrl: './pool-list.component.html'
})

export class PoolListComponent implements OnInit {

  url: any;
  tableColumns: any[] = [
    ['Name', 'name'],
    ['Email Address', 'email'],
    ['Phone', 'phone'],
    ['Experience', 'experience'],
    ['Skills', 'skills'],
    ['Rating', 'rating']
  ];
  nameWithCheckbox: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.url = this.router.url;
  }

  addCandidate() {
    this.router.navigateByUrl(this.url + '/add');
  }

}
