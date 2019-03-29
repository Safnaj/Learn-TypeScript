var Point = /** @class */ (function () {
    //Creating Constructor
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        //Implementation
        console.log('X :' + this.x + ', Y :' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //Implementation
    };
    return Point;
}());
var point = new Point(1, 2); //Passing the Values as Parameters
point.draw();
