import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app21082023';
  outputvar= 0
  name2 = 'arun'

  change2(val:any){
this.outputvar=val
  }

  addTwoNumber (){
    let x = Math.random() * 10;
    let y = Math.random() * 10;
  //  console.log(Math.ceil(x+y))
   return Math.ceil(x+y)
  }

// shobhit = new Observable((observer)=> {
// let result=this.addTwoNumber()
// console.log(result,"result")
// if(result<=8){
//   observer.next(result)
// }
// else{
//   observer.error('sorry we required value less then 9')
// }


//   }).subscribe({
//     next: (res) => console.log(res,"response"),
//     error:(error) => console.log(error,"erroe")
//   })

  sachin = new Promise ((resolve, reject) => {
    let res1 =this.addTwoNumber()
    console.log(res1)
    if (res1<=7){
       resolve("resolve response") 
    }else{
       reject("reject fn call")
    }
  }).then((res)=>console.log(res),(err)=> console.log(err))
  
  arrayFlat = [[['a']], [['a', 'b', 'c'], ['d'], ['f', ['e']]]]
 
  
}
