import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {listPaysService} from "../list-pays.service";
import { Country } from 'src/app/pays/country/information';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  @Input() country: Country | undefined;

  constructor(private listPaysService: listPaysService, private routerService: Router) { }

  ngOnInit(): void {
  }
  onSeclectCountry(){
    if (this.country){
      this.routerService.navigate(['/countries/details',  this.country?.name?.common]);
      this.listPaysService.setCountry(this.country);
    }
  }
}
