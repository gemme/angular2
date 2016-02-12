import {Component,Input,ViewEncapsulation} from 'angular2/core';
@Component({
    encapsulation:ViewEncapsulation.None,
    selector: 'list-item',
    template: `
    <style>
        .completed{
            text-decoration: line-through;
        }
    </style>
    <div>
                <span [ngClass]='list.status'>{{list.title}} </span> 
                <button (click)='list.toggle()'>Toggle</button>
    </div>`})   
export class ListItemComponent {
    @Input()list;
}
