import {Pipe} from 'angular2/core';

@Pipe({
    name:'search'
})
export class SearchPipe{
    transform(model){
        console.log(model);
        return model.filter(item => {return item.title.startsWith('h')});
    }
}