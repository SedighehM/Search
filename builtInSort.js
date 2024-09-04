/**The built-in sort method sorts items based on their Unicode values by default, which may not always yield the desired results.
 *  However, it accepts a comparator function that allows for customized sorting behavior. */

function numberCompare(num1, num2) {
    return num1 - num2
}

[6, 4, 15, 10].sort(numberCompare)