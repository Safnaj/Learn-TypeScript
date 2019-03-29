class Point{
    x: number;
    y: number;

    //Creating Constructor
    constructor(x:number , y:number){   
        this.x = x;
        this.y = y;
    }
    //Optional Parameters with ? mark
    // constructor(x?:number , y?:number){  
    // } 

    draw(){
        //Implementation
        console.log('X :'+this.x + ', Y :'+this.y);
    }

    getDistance(another : Point){
        //Implementation
    }
}

let point = new Point(1,2);    //Passing the Values as Parameters
point.draw();