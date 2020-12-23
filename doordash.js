// Input: list of strings, pickup#, deliver#
// Output: return boolean

// Examples: 
// P1, D1 -> valid 
// P1, P2, D1, D2 -> valid 
// P1, D1, P2, D2 -> valid
// P2, D2, P1, D2 -> invalid 
// P1, D2, P2, D1 -> invalid
// P1, D2 -> invalid 
// P1, P2, D2 -> invalid
// P1, D1, P1, D1 -> invalid 
// P1, P2, D2, D1 -> valid�

// [‘P1’, ‘P2’, 'D1', 'D2']

// keep track of pickups - on each pickup, add order number to a set, check whether order has already been picked up (return false)
// on each delivery - check whether order has been picked up (i.e. included in set). If not picked up, return false
// invalid route is if any pickup has not been delivered.


const validRoutes = (arr) => {
  const globalTracker = new Set();
  const pickedUpOrders = new Set();

  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i]; // string 'P1'
    let action = ele[0];
    let orderNum = ele[1];

    if (action === 'P') {
      if (globalTracker.has(orderNum)) {
        return false;
      } else globalTracker.add(orderNum);
      
      if (pickedUpOrders.has(orderNum)) {
        return false;
      } else pickedUpOrders.add(orderNum);

    } else {
      if (!pickedUpOrders.has(orderNum)) {
        return false;
      } else pickedUpOrders.delete(orderNum);
    }

  }

  return !pickedUpOrders.size;

}


const arr1 = ['P1', 'D1']; // true
const arr2 = ['P1', 'P2', 'D1', 'D2']; // true
const arr3 = ['P1', 'D1', 'P2', 'D2']; // true

const arr4 = ['P2', 'D2', 'P1', 'D2']; // false 
const arr5 = ['P1', 'D2', 'P2', 'D1']; // false
const arr6 = ['P1', 'D2']; // false
const arr7 = ['P1', 'P2', 'D2']; // false
const arr8 = ['P1', 'D1', 'P1', 'D1']; // false
const arr9 = ['P1', 'P2', 'D2', 'D1']; // true

console.log(validRoutes(arr1)); 
console.log(validRoutes(arr2)); 
console.log(validRoutes(arr3)); 
console.log(validRoutes(arr4)); 
console.log(validRoutes(arr5)); 
console.log(validRoutes(arr6)); 
console.log(validRoutes(arr7)); 
console.log(validRoutes(arr8)); 
console.log(validRoutes(arr9)); 