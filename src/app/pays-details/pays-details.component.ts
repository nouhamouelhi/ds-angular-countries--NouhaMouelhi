import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../pays/country/information';
import {listPaysService} from 'src/app/pays/list-pays.service'


@Component({
  selector: 'app-pays-details',
  templateUrl: './pays-details.component.html',
  styleUrls: ['./pays-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  country:Country | null = null;

  languages:string = '';


  constructor(private listpaysservice: listpaysservice, private routerService:Router) { }

  ngOnInit(): void {
    this.country =this.listpaysservice.getCountry();
    this.languages = Object.values({...this.country?.languages}).toString();
  }
  navigateToCountries(){
    this.routerService.navigate(['/countries']);
  }

}
