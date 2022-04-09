import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { listPaysService } from 'src/app/pays/list-pays.service';
import { Country } from '../pays/country/information';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  keyWord: string = '';

  filteredCountriesByContinent:[]=[];

  countries$ : Observable<Array<Country>> | undefined


  constructor(private listPaysService : listPaysService) { }

  ngOnInit(): void {
    this.countries$ = this.listPaysService.getCountries(this.keyWord);
  }

  search(){
    this.countries$ = this.listPaysService.getCountries(this.keyWord);
  }

}
