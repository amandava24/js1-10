/**
 * Javascript problems 1-10 were created by Amanda Van Sickle on 10/2/17.
 */

// 1. Sleep in

function sleep_in(weekday, vacation){
    if(weekday == true && vacation == false){
        return false;
    }
    if(weekday == false || vacation == false){
        return true;
    }
    if(weekday == false || vacation == true){
        return true;
    }
    if(weekday == true || vacation == true){
        return true;
    }
}


// 2. Monkey Trouble
function monkey_trouble(a_smile,b_smile){
    if(a_smile == true && b_smile == true){
        return true;
    }
    if(a_smile == false && b_smile == false){
        return true;
    }
    if(a_smile == true && b_smile == false){
        return false;
    }
    if(a_smile == false && b_smile == true){
        return false;
    }
}


// 3. String Times
function string_times(string, n){
    var anotherOne = "";
    for(var i = 0; i < n; i++){
        anotherOne = anotherOne +string;
    }
    return anotherOne;
}


// 4. Front Times
function front_times(str, n){
    var threeLetters = str.substring(0,3);
    var anotherOne = "";
    for(var i = 0; i < n; i++){
        anotherOne += threeLetters;
    }
    return anotherOne;
}

// 5. String Bits
function string_bits(letters){
    var anotherOne = "";
    for(var i = 0; i < letters.length; i = i+2){
        anotherOne += letters[i];
    }
    return anotherOne;
}

// 6. Caught Speeding
function caughtSpeeding(speed, bday){
    var zeroTickets = 0;
    var oneSmTicket = 1;
    var twoLgTickets = 2;
    if (speed <= 65 && bday == true){
        return zeroTickets;
    }
    if (speed > 65 && speed <= 85 && bday == true){
        return oneSmTicket;
    }
    if (speed > 60 && speed <= 80){
        return oneSmTicket;
    }
    if (speed >= 86 && bday == true){
        return twoLgTickets;
    }

    if (speed >= 81){
        return twoLgTickets;
    } else{
        return zeroTickets;
    }
}



// 7. FizzBuzz
function fizz_buzz(num){
    var fizz = "Fizz";
    var buzz = "Buzz";
    if(num % 3 == 0 && num % 5 == 0) {
        return fizz + buzz;
    }
    if(num % 3 == 0){
        return fizz;
    }else  if(num % 5 !=0){
        return num +"!";
    }
    if(num % 5 == 0){
        return buzz;
    }else{
        return num + "!";
    }
}

// 8. Tea Party
function teaParty(tea, candy){
    if(tea < 5|| candy < 5){
        return 0;
    }
    if(tea >= candy * 2 || candy >= tea * 2){
        return 2;
    }
    if(tea >= 5 && candy >= 5){
        return 1;
    }else{
        return 0;
    }
}


// 9. Black Jack
function blackJack(a, b) {
    var biggestA= 21 - a;
    var biggestB= 21 - b;
    if(a == 21){
        return a;
    }
    if(b== 21){
        return b;
    }
    if(a > 21 && b > 21){
        return 0;
    }
    if (a > 21 && b <= 21){
        return b;
    }
    if (a <= 21 && b > 21){
        return a;
    }
    if(biggestA > biggestB){
        return b;
    }
    if(biggestB > biggestA){
        return a;
    }
}


// 10. Lone Sum
function loneSum(a, b, c) {
    if(a == b && b == c){
        return 0;
    }
    if(a == b){
        return c;
    }
    if(a == c){
        return b;
    }
    if(b == c){
        return a;
    }
    return a+b+c;
}


function tester() {

    document.getElementById("output").innerHTML = sleep_in(true, false);
    document.getElementById("output2").innerHTML = monkey_trouble(false, false);
    document.getElementById("output3").innerHTML = string_times("Hi", 2);
    document.getElementById("output4").innerHTML = front_times("Chocolate", 1);
    document.getElementById("output5").innerHTML = string_bits("Proctrastination");
    document.getElementById("output6").innerHTML = caughtSpeeding(90, false);
    document.getElementById("output7").innerHTML = fizz_buzz(3);
    document.getElementById("output8").innerHTML = teaParty(6,8);
    document.getElementById("output9").innerHTML = blackJack(19,20);
    document.getElementById("output10").innerHTML = loneSum(1,2,3);
}




























