// Code your solutions in this file
function writeCards(names){
    for (let i = 0; i < names.length; i++) {
        names[i] = (`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return names;
}

function countDown(startNumber){
    while (startNumber > 0) {
        console.log(startNumber);
        startNumber -= 1;
    }

    console.log(startNumber);
}