// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    //input - two integers
    // output - an array containing all integers between the two parameters inclusivinly
    //constraints - use push method and a loop method.
    //edge cases - none known.
    // create collection to hold array
    var collection = []
    // create function 
    return function (integer1, integer2) {
        // set up a if then dependent on which integer is bigger
        if (integer1 <= integer2) {
         for (var i = integer1; i <= integer2; i++);
        } else if (integer1 >= integer2) {
            for (var i = integer2; i >= integer1; i ++)
        } else {
            console.log(integer1)
        }
      console.log(collection.push);
    }
    
    
    
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}
