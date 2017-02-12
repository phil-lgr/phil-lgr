
function helloApp(args) {
    var a = [1, 2, 3];
    _.forEach((val) => {
        console.log(val)
    }, a);
    console.log('hello app!')
}

helloApp();