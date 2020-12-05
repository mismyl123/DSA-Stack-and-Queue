const { Stack } = require('./dsa-stack');

function main() {
    const starTrek = new Stack();

    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    
    console.log(starTrek);
    console.log(peek(starTrek));
    console.log(isEmpty(starTrek));
    console.log(isEmpty(starTrek));
    console.log(display(starTrek));

}

function peek(stack) {
    return stack.top.data
}

function isEmpty(stack) {
if (!stack.top) {
    return true;
}
else {
    return false;
    }
}


function display(stack) {
    let currNode =stack.top.data
    while (stack.empty) {
        list.push(stack.top.data)
        console.log(stack.top)
    }
    return list
}


main();