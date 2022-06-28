/*
You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example
candle = [4,4,1,3]
The maximum height candles are units high. There are of them, so return

Sample Input :
4
3 2 1 3

*/

function birthdayCakeCandles(candles) {
    let max = Math.max(...candles);
    let n = candles.length;
    let res = 0;

    for (let i = 0; i < n; i++) {
        if (candles[i] == max) {
            res += 1;
        }
    }

    // res = candles.filter( (res) => {
    //     return  res == max;
    // }); 
    console.log(res);

}
birthdayCakeCandles([3, 2, 1, 3]);






