import { Component, OnInit } from '@angular/core';
import { ClimaService } from './services/clima.service'; //adentro de las llaves va el nombre de mi clase
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Clima';
  //implemento oninit, para que no me tire error lo "Declaro" abajo
  weather: any;
  constructor (private weatherService: ClimaService){ //aca es donde instancio mis clases
  }

  ngOnInit(){//lo que hace onit es que cuando se inicie la app llame automaticamente los datos del backend
  }
  getWeather(cityname: string, countryCode:string){
    this.weatherService.getClima(cityname, countryCode)
    .subscribe(
      res =>{ //cuando trata de una respuesta no puedo repetir la variable que recibe la respuesta 2 veces, debo usar corchetes
        console.log(res);
        this.weather = res
      },
      err=> console.log(err),
    )
  }

  submitLocation(cityName: HTMLInputElement, countryCode: HTMLInputElement){  //esta funcion se encarga de la logica del formulario
    console.log(cityName.value, countryCode.value)  //el .value ahce que me devuelta solo el valor/elemento ingresado
    if (cityName.value && countryCode.value){ //este if valida, si hay datos imprime valores
    this.getWeather(cityName.value, countryCode.value)
    cityName.value= ''; //me limpia los campos del formulario
    countryCode.value= '';
    }
    else{ //sino sale esta alerta
      alert('Please. Insert some values.')
    }
    cityName.focus();

    return false;

  }

}
// <link rel="stylesheet" href="file:///C:/Users/Mauro/AppData/Local/Temp/bootstrap.min-1.css">
