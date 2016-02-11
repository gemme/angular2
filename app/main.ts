///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap} from 'angular2/platform/browser';
import {MyNameComponent} from './components/input-name/my-name.component';
import {MyListService} from './components/list/my-list.service';

bootstrap(MyNameComponent,[
    MyListService
]);