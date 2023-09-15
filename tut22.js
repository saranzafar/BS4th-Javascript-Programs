// ------------------- Exercise # 1 -------------------
/*
1. generate randome number 
2. user guess that what is number(take input)
3. give hint to user 
4. total score = 100-hint
5. show result
*/

let min = 1;
let max = 100;
let user_guess;
let guesses = 0;
let rndm = Math.round(min + max * Math.random());


do {
    user_guess = prompt("Guess what is Randome Number between 1 and 100: ");
    console.log(rndm);
    guesses++;

    if (rndm == user_guess) {
        alert("Congratulation! You Guess Correct");
        console.log("Congratulation! You Guess Correct, In", guesses, "Attempts");
        console.log("Hence your Score is:", 100 - guesses);
    }
    if (rndm > user_guess) {
        alert("Randome number is Greater then ", user_guess);
        console.log("Randome number is Greater then ", user_guess);
    }
    else if (rndm < user_guess) {
        alert("Randome number is less then ", user_guess);
        console.log("Randome number is less then ", user_guess);
    }
} while (user_guess != rndm);
