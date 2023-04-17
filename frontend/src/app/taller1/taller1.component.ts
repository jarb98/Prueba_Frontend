import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-taller1',
  templateUrl: './taller1.component.html',
  styleUrls: ['./taller1.component.css']
})
export class Taller1Component implements OnInit {

  optionClicked: string = '';
  startDate: string = '';
  endDate: string = '';
  text1: string = '';



  texto_respuesta = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {


  }

  onOptionClick(optionNumber: number, event: Event) {
    event.preventDefault();



    if (optionNumber === 1) {
      this.optionClicked = 'Estado con mayor tráfico de botes en un periodo';
    } else if (optionNumber === 2) {
      this.optionClicked = 'Tipo comun de carga mas comun por estado';
    } else if (optionNumber === 3) {
      this.optionClicked = 'Analisis Pandemia';
    }



  }

  resultados_taller_opcion1()
  {
    console.log("El boton funciona")
    /**Ejecutar metodo post */

    if (this.startDate >= '2017-01-01' && this.startDate <= '2020-12-31' &&
    this.endDate >= '2017-01-01' && this.endDate <= '2020-12-31'){


      this.http.post<string[]>(`http://127.0.0.1:5000/api/taller1/opcion1`,
      {"startDate":this.startDate, "endDate":this.endDate})
      .subscribe(resp => {
        console.log(resp)



      });
      console.log(this.startDate)
      console.log(this.endDate)

    }else {
      console.log('Error los años deben estar entre 2017 y 2020');

    }


  }

  resultados_taller_opcion2()
  {

    if (this.startDate >= '2017-01-01' && this.startDate <= '2020-12-31' &&
    this.endDate >= '2017-01-01' && this.endDate <= '2020-12-31'){


    /**Ejecutar metodo post */
    this.http.post<string[]>(`http://127.0.0.1:5000/api/taller1/opcion2`,
    {"startDate":this.startDate, "endDate":this.endDate, "estado":this.text1})
    .subscribe(resp => {
      console.log(resp)



    });
    console.log(this.startDate)
    console.log(this.endDate)
  }else {
    console.log('Error los años deben estar entre 2017 y 2020');

  }



    }





  resultados_taller_opcion4()
  {


    if (this.startDate >= '2017-01-01' && this.startDate <= '2020-12-31' &&
    this.endDate >= '2017-01-01' && this.endDate <= '2020-12-31'){

  /**Ejecutar metodo post */
  this.http.post<string[]>(`http://127.0.0.1:5000/api/taller1/opcion4`,
  {"startDate":this.startDate, "endDate":this.endDate, "estado":this.text1})
  .subscribe(resp => {
    console.log(resp)



  });
  console.log(this.startDate)
  console.log(this.endDate)

    }

  }

}
