function averageThreeNumbers(a, b, c) {
    let sum = a + b + c;
    let avg = (a + b + c)/3;
    return avg;
}

function createSentence(num, noun) {
    let result = "On average, a Berkeley student has " + num + " " + noun + "s.";
    return result;
}

function getRandomNum(max) {
    min = 0;
    max = Math.floor(max);
    return Math.floor(Math.random() * (max + 1));
}

let x = getRandomNum(20);
let y = getRandomNum(10);
let z = getRandomNum(13);

let avg = averageThreeNumbers(x,y,z);

let sentence = createSentence(10,"Shiba");

console.log(sentence);
