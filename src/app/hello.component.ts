import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <h1>{{ data.titles.normalized }}</h1>
    <p>{{data.description}}</p>
    <img src="{{data.originalimage.source}}">  
  `,
  styles: [
    `
      h1 {
        font-family: Lato;
      }
    `
  ]
})
export class HelloComponent {
  data: any;
  constructor(private http: HttpClient) {
    http
      .get('https://en.wikipedia.org/api/rest_v1/page/summary/Võru')
      .subscribe(response => {
        this.data = response;
        //console.log(response);
      });
  }
  @Input() name: string;
}
