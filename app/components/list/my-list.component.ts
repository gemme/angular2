import {Component} from 'angular2/core';
import {MyListService} from './my-list.service';

@Component({
    selector: 'my-list',
    template: `<div> 
        <ul> 
            <li *ngFor='#list of myListService.myList'> 
                <span [hidden]='list.status==="completed"'>{{list.title}}</span> 
                <button (click)='list.toggle()'>Toggle</button>
            </li> 
        </ul> 
    </div>`
})
export class MyListComponent{
    
    constructor(public myListService: MyListService){}
    
}