// with the function 'myFunction' the parameter 'myNum' should always be provided with a number as an argument, and the returned output is expected to be a string
export function myFunction(myNum: number): string {
    //if the number is exactly 5 the return the word 'true'
    if (myNum == 5) {
        return 'true'
    // if the number provided is less then 5 but not a negative number return 'false'
    } else if(myNum < 5 && myNum > 0) {
        return 'false'
    // if the number is greater then 5 return 'big'
    }else if (myNum > 5){
        return 'big'
    // if not any of the above (a negative number) return 'negative'
    }else {
        return 'negative'
        
    }
}