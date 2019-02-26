//Declaring Variables Types
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'ABC'];

//Enum
var color;
(function (color) {
    color[color["Red"] = 0] = "Red";
    color[color["Blue"] = 1] = "Blue";
    color[color["Green"] = 3] = "Green";
})(color || (color = {}));
var bgColor = color.Red;
console.log(bgColor);
