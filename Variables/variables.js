function doSomething() {
    for (var i = 0; i < 5; i++) {   //Can use Let Instead of VAR to prevent outer loop access
        console.log(i);
    }
    console.log('Finally ' + i);
}
doSomething();
