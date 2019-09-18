// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.
//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// first way of doing it, which was more difficult than it needed to be

function remove(array, cutOut) {
    if (array.indexOf(cutOut) < 0) {
        return array
    } else {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === cutOut) {
                console.log(array[i])
                array.splice(i, 1)
                i--
            }
        }
        return array
    }
}

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

function remove(array, cutOut) {

    let newArray = []

    for (let x of array) {
        if (x !== cutOut) {
            newArray.push(x)
        }
    }
    return newArray
}

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.

function sum(nums) {
    let total = 0
    for (let num of nums) {
        total += num
    }
    return total
}

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

function average(nums) {
    if (nums.length < 1) {
        return undefined
    }
    let total = 0
    for (let num of nums) {
        total += num
    }
    let avg = total / nums.length
    return avg
}

// I have a question here... why would this function want to return undefined? I just messed around on what to return if there is an empty array (0, null, "undefined") but it wanted undefined returned. why is it desirable to return undefined rather than NaN, which got returned when I didn't include that first if statement?



// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.


// function minimum(nums) {
//     if (nums.length < 1) {
//         return undefined
//     }
//     let lowestNum = []

//     lowestNum.push(nums[0])

//     for (let i = 0; i < nums.length; i++) {
//         if (lowestNum[0] > nums[i]) {
//             lowestNum.pop()
//             lowestNum.push(nums[i])
//         }
//     }
//     return lowestNum
// }

// so, I got it with the old way I know and love... now it's time to see if I can do it with my old foe, the for/of loop

function minimum(nums) {
    if (nums.length < 1) {
        return undefined
    }
    let lowestNum = []

    lowestNum.push(nums[0])

    for (let num of nums) {
        if (num < lowestNum[0]) {
            lowestNum.pop()
            lowestNum.push(num)
        }
    }
    return lowestNum
}

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// declare the function
function selectionSort(unsortedArray) {
    // create the empty endGoal array
    let sortedArray = []
    // make a copy of the original array
    let arrayCopy = unsortedArray.slice(0);
    // create a for loop to run through the original array
    for (let num of unsortedArray) {
        // use my minimum function from the previous question to find the lowest number in the copy array, then put that number into the endGoal array
        sortedArray.push(minimum(arrayCopy)[0])
        // use my minimum function from the previous question to find the lowest number in the copy array, then get that index number
        let idx = arrayCopy.indexOf(minimum(arrayCopy)[0])
        // use that index number to splice out the number from arrayCopy
        arrayCopy.splice(idx, 1)
        // for some reason, these previous two lines are deleting the last number in the arrayCopy, rather than the idx. (or it might be that the idx is always being set to the last number in the array, instead of my lowest number, as returned by the function) I've tested it, and it's true. why would that delete the last number instead of the idx? I guess idx is always equal to (arrayCopy.length)-1. but why?

        // so it's my idx variable, which is always coming to -1. which is what happens when an item is not found in the array. but even when I moved the declaration of idx to before I did any pushing or splicing, I still get the same problem

        // I found the problem! my function returns an ARRAY that contains the number 3 in it, rather than just the number 3 itself. spend tomorrow morning figuring out how to get just the number from inside that array, whether it's not using the minimum formula, or some other way. good figurin'...
    }
    // return the sorted Array
    return sortedArray
}

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
