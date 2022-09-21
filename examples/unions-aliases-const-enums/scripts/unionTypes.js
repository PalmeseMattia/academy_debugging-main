function showTotal(total) {
    if (typeof total === 'number') {
        console.log('total union type = ' + total);
    }
    else {
        var sum = total.reduce(function (prevVal, currVal, index, array) {
            return prevVal + currVal;
        });
        console.log('total union type = ' + sum);
    }
}
var values = [5, 5, 5, 5];
showTotal(values);
showTotal(50);
