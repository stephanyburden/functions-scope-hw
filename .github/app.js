// //////// 1. VERBAL QUESTIONS /////////
////////// DIFFERENCE BETWEEN A PARAMETER AND AN ARGUMENT 
// -----Parameters are the names listed in the function's definition. 
//  -----Arguments are the real values passed to the function. 
// ------Parameters are initialized to the values of the arguments supplied.


// ////////// DIFFERENCE BETWEEN RETURN AND CONSOLE.LOG //////////
// ------- return is a statement that allows a function to output a value back to where it was called. 
// -------- console. log is a function that lets us inspect values for debugging purposes.



// //////// 2. PALINDROME ////////

function checkPalindrom(string) {
    //  convert string to lowercase
    const lowerCaseString = string.toLowerCase();
    
    const reversedString = lowerCaseString.split("").reverse().join(""); 
    console.log(reversedString)
    //  revverse the string
    // compart lowercase string with reverse string
    return lowerCaseString === reversedString
    
    if (lowerCaseString === reversedString) {
        return true;
    } else {
        return false;
    }
    
    }
    
    console.log(checkPalindrom("Racecar"));



// //////// 3. Check a List ///////


function checkForKids(kidsName, kidsArray) {
    console.log(`${kidsName} is not listed with ${kidsArray}`);
    return false;   

}

// console.log(checkForKids("Brandy", ["Matt, Jill"]));

const kidsCheckList = checkForKids("Brandy", [ "Matt, Jill"]);
console.log(kidsCheckList); 





// // ////// Sum Array 



// function sumArray(numbersArray){
//     // write a for loop to figure out sum
//     for ( let i = 0; i < numbersArray.length; i++){
//         console.log(numbersArray[i]);
//     }
// }
//  sumArray();
// // const sum = sumArray([1, 2, 3, 4, 5, 6]);

// // console.log(sum);

function sumArray(numArray) {
    let sum = 0
    for ( let i = 0; numArray.lenght; i++) {
        sum += numArray[i];
    }
 
}
const sum = sumArray([1, 2, 3, 4, 5, 6]);
console.log(sum);



