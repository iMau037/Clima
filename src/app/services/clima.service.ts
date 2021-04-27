import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  apiKey:string= 'db90e2949e67240384fa73c1515b18ca';
  URL: string = ' ';
  /*Esto esta mal, no pongo la url, sino que declaro la propiedad como string
  URL!: 'http://api.openweathermap.org/data/2.5/weather?q=&appid=';*/
  //uso comillas simples por que voy a concatenar o para que lo tome como string
  //investigar el uso de las 'q' ( creo que significan consultas )

  constructor(private http: HttpClient) {
    this.URL= `http://api.openweathermap.org/data/2.5/weather?&appid=${this.apiKey}&units=metric&q=`;
    /*arriba uso comillas INVERTIDAS, esto me permite concatenar con la siguiente forma: `${} `
    investigar --> &q= */
  }
  getClima(cityName: string, countryCode: string){
    return this.http.get(`${this.URL}${cityName}, ${countryCode} `);

  }
}
