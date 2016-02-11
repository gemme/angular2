
export class MyModel{
    public status:string = 'started';
    constructor(public title:string = ""){}
 
    public getModel(){
        return this;
    }
    
    toggle():void{
        this.status = (this.status === 'started')?'completed': 'started';
    }
}