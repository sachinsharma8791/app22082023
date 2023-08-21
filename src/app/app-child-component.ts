import {Component,Input,Output,EventEmitter} from '@angular/core'

@Component({
selector:'app-child',
templateUrl:'./child-component.html',
styleUrls : ['./child-component.scss']
})

export class ChildComponent{
 @ Input () name ='sachin'  
 don = 1122
 @ Output () name1 = new EventEmitter ()

 change(){
    this.name1.emit(this.don)
 }
 
}