import { Injectable } from "@angular/core";

@Injectable()
export class CarsService {
  cars = [
    {
      name: 'Ford',
      id: 1,
      year: 2016,
      color: 'magenta'
    },
    {
      name: 'Audi',
      id: 2,
      year: 2017,
      color: 'black'
    },
    {
      name: 'Bmw',
      id: 3,
      year: 2018,
      color: 'white'
    },
    {
      name: 'Mercedes',
      id: 4,
      year: 2020,
      color: 'orange'
    }
  ]
}
