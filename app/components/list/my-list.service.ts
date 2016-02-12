import {Injectable} from 'angular2/core';
import {MyModel} from '../input-name/my-model';

@Injectable()
export class MyListService{
    public myList:MyModel[] = [
        new MyModel('haber 1'),
        new MyModel('haber 2'),
        new MyModel('haber 3'),
        new MyModel('suicide')
    ];
    
    addList(myModel:MyModel){
        this.myList = [...this.myList, myModel];
    }

}