const arr = [
    { id: '101', name: 'Alice' },
    { id: '101', name: 'A' },
    { id: '101', name: 'Al' },
    { id: '102', name: 'Bob' },
    { id: '103', name: 'Charlie' },
  ];
   
  const map = arr.reduce((acc, record) => {
    acc[record.id] = record;
    return acc;
  }, {});

//   const map = arr.reduce(function(acc, record){
//     acc[record.id] = record;
//     return acc;
//   }, {});
  
  
// console.log(map);

var array = [1, 2, 3, 1, 2, 3, 1, 2, 3];

const sliceByNumber = function(array, number){
    const length = Math.ceil(array.length / number)
    return new Array(length).fill().map(function(_, i){
            return array.slice(i * number, (i + 1) * number);
        }   
    )
}


// var array2 = array.slice(0,3);
var array2 = sliceByNumber(array, 3);//配列の分割

newArray = new Array(3);

for(var i = 0; i < array2.length; i++){
    var result = array2[i].reduce(function (accumulator, currentValue, currentIndex, array) {
        return accumulator + currentValue;
    });
    newArray[i] = result;
}
console.log(array2);
console.log(result);
console.log(newArray);

// var result = array.reduce(function (accumulator, currentValue, currentIndex, array) {
//     return accumulator + currentValue;
// });

// console.log(result); 




// var array = [10, 100, 30, 50];

// var result = array.reduce(function (accumulator, currentValue, currentIndex, array) {
//     if(accumulator > currentValue){
//         return accumulator;
//     } else {
//         return currentValue;
//     }
// });

// console.log(result); // 100