var Point = /** @class */ (function () {
    //Constructor with Optional Parameters
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X : ' + this.x + ', Y : ' + this.y);
    };
    //Get Method
    Point.prototype.getX = function () {
        return this.x;
    };
    //Set Method
    Point.prototype.setX = function (value) {
        if (value < 0)
            throw new Error('Value cannot be lesser than Zero..!');
        this.x = value;
    };
    return Point;
}());
var point = new Point(1, 2);
var x = point.getX(); //Get Value using Getter
point.setX(10); //Set New Value for X usign Setter
point.draw();
