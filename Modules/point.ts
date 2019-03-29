//Exporting the class to Access form Another Class
export class Point{
    constructor(private x?: number , private y?: number){
    }

    draw(){
        console.log('X : '+ this.x + ', Y : '+this.y);
    }
}