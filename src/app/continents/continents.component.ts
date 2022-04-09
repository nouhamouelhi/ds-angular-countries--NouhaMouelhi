import { Component, OnInit } from '@angular/core';
import { listPaysService } from 'src/app/pays/list-pays.service';

@Component({
  selector: 'app-continents',
  templateUrl: './continents.component.html',
  styleUrls: ['./continents.component.css']
})
export class ContinentsPageComponent implements OnInit {

  continent: string= '';
  constructor(private listpaysservice: listPaysService){}

  setContinentAfrica(){
    this.continent = 'Africa'
    this.listpaysservice.getCountriesByContinent(this.continent);
  }
  setContinentAmerica(){
    this.continent = 'Americas'
    this.listpaysservice.getCountriesByContinent(this.continent);

  }
  setContinentAsia(){
    this.continent = 'Asia'
    this.listpaysservice.getCountriesByContinent(this.continent);
  }
  setContinentEurope(){
    this.continent = 'Europe'
    this.listpaysservice.getCountriesByContinent(this.continent);
  }
  setContinentAustralia(){
    this.continent = 'Oceania'
    this.listpaysservice.getCountriesByContinent(this.continent);
  }


  ngOnInit(): void {
  }

}

export class ContinentsComponent {
}
