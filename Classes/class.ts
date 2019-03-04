class Point{
    x: number;
    y: number;

    draw(){
        //Implementation
        console.log('X :'+this.x + ', Y :'+this.y);
    }

    getDistance(another : Point){
        //Implementation
    }
}

let point = new Point();    //Creating New Object from the class
point.x = 1;
point.y = 2;
point.draw();