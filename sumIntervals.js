const sumIntervals = (arr) => {

   //sort array by first ele
   arr.sort((a,b) => {return Number(a[0]) - Number(b[0])});
   //arr.forEach((e) => console.log(e));
   let cArr = []; //consilidated array of intervals
   //find the overlapping ranges and make a new array of consilidated ranges


   while (arr.length > 0){
      console.log ('---------------Next while-------------------');
      let curr = arr[0];
      arr.splice(0,1);
      console.log (`arr = ${arr}, curr = ${curr}`);
      // if (arr.length > 1){



         while(true && arr.length > 0){
            console.log (`inside search loop  arr = ${arr}, curr = ${curr}`);
            if (arr[0][0] > curr[1]){ //if current lower range exceeds upper range stop this loop
               console.log (`hit the breaks range outta range ${arr[0]} > ${curr}`);
               break;
            }else{
               if (arr[0][0] >= curr[0] && arr[0][0] <= curr[1]){ //if lower range is within the range of curr
                  if (arr[0][1] > curr[1]){ //if upper range exceeds upper range of curr set new upper range
                     console.log (`overlapping range found ${curr} and ${arr[0]}`);
                     curr[1] = arr[0][1];
                     console.log (`new curr = ${curr}`); 
                     arr.splice(0,1); //delete range out of array
                  }else{
                     console.log (`found entirely inclusive range NUKING ${arr[0]}`);
                     arr.splice(0,1);
                  }
               }
            }
            console.log ('******NEXT SEARCH LOOP*****');
         }


         console.log (`pushing ${curr} to new array`);
         cArr.push(curr);


         
         
      // }else{ //if it's the last item add it to the new array, no comparison needed
      //    cArr.push(curr);
      //    arr.splice(0,1);
      // } 
   }
   
   
   
   cArr.forEach((e) => console.log(e));
   let sum = 0
   for (let e of cArr){
      sum += e[1] - e[0];
   }
   console.log (sum);
   return sum;
   
   
}

// sumIntervals( [
//    [1,5],
//    [10, 20],
//    [1, 6],
//    [16, 19],
//    [5, 11]
// ] );

// sumIntervals( [
//     [1,5],
//     [10, 20],
//     [36,42],
//     [57, 96],
//     [78, 97],
//     [1, 6],
//     [16, 19],
//     [5, 11],
//  ] );

sumIntervals( [
   [1,5],
   [1,5],
   [1,5]
] );








/*

sort array by first ele in each range

do this until array is empty.{
init var current range at first item in array
compare to every other item and see if there are overlapping items
   if you get to an item that starts at a greater range than the max current range stop the search for efficiencies sake
if there are overlapping items adjust the range and delete appropriate ele out of array
add current range to a new array and delete first ele out of array
}

sum all ranges in new array


******************************************************

Solutions
Forks (28)
Discourse (360)
Collect|
Write a function called sumIntervals/sum_intervals() that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1,4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1,2],
   [6, 10],
   [11, 15]
] ); // => 9

sumIntervals( [
   [1,4],
   [7, 10],
   [3, 5]
] ); // => 7

sumIntervals( [
   [1,5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ); // => 19
Random Tests
100 tests with 1 - 10 intervals from the range [-20, 20]
100 tests with 20000 - 50000 intervals from the range [-10^9, 10^9]

*/