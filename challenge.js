//Challenge number one
let message = "There is no war in Ba Sing Se";

let challengeOne = function() {
    let words = message.split(' ');
    return words.length;
}

console.log(challengeOne());

//Challenge number two
let countries = ['China','Japan','South Korea','Vietnam','Malaysia'];
let capitals = ['Beijing','Tokyo','Seoul','Hanoï','Kuala Lumpur'];

for(let i = 0; i < countries.length; i++) {
    console.log(`Your country : ${countries[i]} has the capital named : ${capitals[i]}.`);
}


//Challenge number three
function find(num){
switch(num) {
    case 0:
        console.log("Your fate is: A certain victory");
        break;
    case 1:
        console.log("Your fate is: Not so certain victory");
        break;
    case 2:
        console.log("Your fate is: An uneasy victory");
        break;
    default:
        console.log("Your fate is unclear, ô chosen undead");
}
}
//Example
console.log(find(1));

//Challenge number four
function checkSeason(month) {
    let season;
    switch(month) {
        case 'December':
        case 'January':
        case 'February':
            season = 'Winter';
            break;
        case 'March':
        case 'April':
        case 'May':
            season = 'Spring';
            break;
        case 'June':
        case 'July':
        case 'August':
            season = 'Summer';
            break;
        case 'September':
        case 'October':
        case 'November':
            season = 'Autumn';
            break;
        default:
            season = 'Invalid month';
    }
    return season;
}
//Example
console.log(checkSeason('September'));