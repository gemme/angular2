import {Component,Input} from 'angular2/core';
@Component({
    selector: 'list-item',
    template: `<div>
                <span [hidden]='list.status==="completed"'>{{list.title}}</span> 
                <button (click)='list.toggle()'>Toggle</button>
    </div>`})   
export class ListItemComponent {
    @Input()list;
}