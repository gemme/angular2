import {Component} from 'angular2/core';
import {MyListComponent} from '../list/my-list.component';
import {MyListService} from '../list/my-list.service';
import {MyModel} from './my-model';

@Component({
    selector: 'my-app',
    directives: [MyListComponent],
    template: `<form (submit)="onSubmit()">
                    <input type="text" [(ngModel)]="myModel.title" >
                    <my-list></my-list>
               </form>`
})
export class MyNameComponent {
    
    public myModel: MyModel = new MyModel();
    
    constructor(public myListService: MyListService){ }
    
    onSubmit(){
        this.myListService.addList(this.myModel.getModel());
        this.myModel = new MyModel();
    }
}