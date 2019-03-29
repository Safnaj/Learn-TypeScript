class Point{

    //Constructor with Optional Parameters
    constructor(private x?: number, private y?:number){
    }

    draw(){
        console.log('X : ' + this.x + ', Y : '+this.y);
    }
    //Get Method
    getX(){
        return this.x
    }
    //Set Method
    setX(value){
        if(value < 0)
            throw new Error('Value cannot be lesser than Zero..!');
        
        this.x = value;
    }
}

let point = new Point(1,2);
let x = point.getX();   //Get Value using Getter
point.setX(10);         //Set New Value for X usign Setter
point.draw();