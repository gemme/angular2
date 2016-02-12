import {Component} from 'angular2/core';
import {MyListService} from './my-list.service';
import {ListItemComponent} from '../list-item/list-item.component';

@Component({
    selector: 'my-list',
    directives: [ListItemComponent],
    template: `<div> 
        <ul> 
            <li *ngFor='#list of myListService.myList'> 
                <list-item [list]="list"></list-item>
            </li> 
        </ul> 
    </div>`
})
export class MyListComponent{
    
    constructor(public myListService: MyListService){}
    
}