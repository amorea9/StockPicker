function StockPicker(arr) {
  //minimum buying price is first item of the array
  let minStockPrice = arr[0];
  //starting profit is 0
  let maxStockProfit = 0;
  //looping through the array
  for (let i = 1; i < arr.length; i++) {
    // Update the minimum stock price if a lower price is found
    if (arr[i] < minStockPrice) {
      minStockPrice = arr[i];
    }
    // Calculate the potential profit by selling at the current price
    let potentialProfit = arr[i] - minStockPrice;

    // Update the maximum profit if the potential profit is greater
    if (potentialProfit > maxStockProfit) {
      maxStockProfit = potentialProfit;
    }
    //if no profit can be made, return -1
    if (maxStockProfit <= 0) {
      maxStockProfit = -1;
    }
  }
  return maxStockProfit;
}

//Test cases
let arr = [2, 1, 456, 4, 75765, 3, 345, 3];
let arr2 = [34, 34, 34, 2, 54];
let arr3 = [35436, 65, 4, 2];
console.log(StockPicker(arr));
console.log(StockPicker(arr2));
console.log(StockPicker(arr3));
