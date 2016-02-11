import {Injectable} from 'angular2/core';
import {MyModel} from '../input-name/my-model';

@Injectable()
export class MyListService{
    public myList = [
        new MyModel('haber 1'),
        new MyModel('haber 2'),
        new MyModel('haber 3')
    ];
}