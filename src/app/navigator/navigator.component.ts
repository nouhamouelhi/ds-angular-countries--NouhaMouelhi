import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listPaysService } from 'src/app/pays/list-pays.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {

  constructor(private listpaysService : listpaysservice) { }

  ngOnInit(): void {
  }
  resetCountries(){
    this.listpaysService.resetCountries();
  }
}
