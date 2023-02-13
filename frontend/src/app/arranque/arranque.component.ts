import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-arranque',
  templateUrl: './arranque.component.html',
  styleUrls: ['./arranque.component.css']
})
export class ArranqueComponent implements OnInit {

  nombresArchivos : string[] = [];
  input1 : string = "";
  input2 : string = "";
  input3 : string = "";
  respuesta : string[] = [];
  numero_palabras: number = 0;
  constructor(private http: HttpClient) { }

  resultados()
  {
    console.log(this.input1);
    /**Validar que numero_palabras sea un numero e inciarlo vacio */
    this.http.post<string[]>(`http://127.0.0.1:5000/api/resultados`,
     {"nombre1":this.input1, "nombre2":this.input2, "nombre3":this.input3, "num_palabras": this.numero_palabras})
      .subscribe(resp => {
        console.log(resp);
        this.respuesta = resp;
      });

  }

  ngOnInit() {
    this.http.get<string[]>('http://127.0.0.1:5000/api/nombresnoticias').subscribe(data => {
      this.nombresArchivos = data;
      console.log("Api init funciona")
    });


}
}
