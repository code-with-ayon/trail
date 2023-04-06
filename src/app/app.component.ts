import { Component } from '@angular/core';
import { environment } from './../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a:any ;
  b: any ;
  sum:any;
  dif:any;

  //sum = (this.a, this.b);//
//  {
//     this.sum = this.addition(this.a, this.b);
//   }
  addition() {

    this.sum = (this.a + this.b);
  }
  sub(){
    this.dif= (this.a - this.b)
  }
  resete(){
    this.a=""
    this.b=""
    this.sum=""
    this.dif=""

  }
  configuration: any = "";
  constructor(){
    console.log(environment.environment_title);
    this.configuration = environment;
  }
  public value:number =0;
  incre(){
    this.value++;
  }
  decre(){
    (this.value)===0 ? this.value-- : this.value--
  }
  Reset(){
   this.value=0;
  }

}
