function getAge(inputString){
    let myStr = inputString.charAt(0); // return the 1st char
    let myNum = parseInt(myStr); // convert char to num
    return myNum; // return
}

console.log(getAge("4 years old")); // Return 4