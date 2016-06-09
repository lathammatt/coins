/*
  Input: 0.67
  Output:
  {
    quarters: 2,
    dimes: 1,
    nickels: 1,
    pennies: 2
  }

*/

function coinCounter(amount) {
  // Initialize a JavaScript object to hold the coins
  var coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
  };
  // var qua = amount % .25;
  // return qua;
  coinPurse.quarters = Math.floor(amount/.25);
  var minusq = amount % .25;
  coinPurse.dimes = Math.floor(minusq/.10);
  var minusd = minusq % .10;
  coinPurse.nickels = Math.floor(minusd/.05);
  var minusn = minusd % .05;
  coinPurse.pennies = Math.floor(minusn/.01);
  // return coinPurse;
  console.log(coinPurse);
}

var coins = coinCounter()


