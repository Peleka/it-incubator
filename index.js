//Задача 3 и 4:
  // document.getElementById('button').onclick = function() {
  //   let mes = document.getElementById('message')
  //   if(mes.value === 'google') {
  //     return alert ("Yandex круче. Но это не точно")
  //   } 
  //   return alert(document.getElementById('message').value)
  // }


  // Задача 5:
  // const obj = [
  //   {name: 'Max', age: 23},
  //   {name: 'Ann', age: 33},
  //   {name: 'Lon', age: 12},
  //   {name: 'Bom', age: 21}
  // ]

  // document.getElementById('button').onclick = function() {
  //   alert (obj[0].name)
  // }

  //Задача 6

// function superSum(a, b) {
//     alert (a + b)
//   }
//  superSum(2, 8)



// Задача 7:
// const arr = [3, 1, 15, 9, 7, 0]

// const maxElement = (array) => {
//   let max = array[0];
//   for (let i =0; i <= array.length; i++) {
//     if(max < array[i]) max = array[i]
//   }
//   return max
// }

// const minElement = (array) => {
//   let min = array[0];
//   for (let j =0; j <= array.length; j++) {
//     if(min > array[j]) min = array[j]
//   }
//   return min
// }

// const maxEl = maxElement(arr)
// const minEl = minElement(arr)

// console.log(maxEl)
// console.log(minEl)


// Задача 8: 
let a = 'XXX';
let b = 'YYY';

[a, b] = [b, a]

console.log('a', a)
console.log('b', b)

//Задача 9:
const arr = [3, 1, 15, 9, 7, 0]

function findMax(array) {
  return Math.max.apply(null, array)
}

console.log(findMax(arr))

//Задача 10:
document.getElementById('button').onclick = function() {
  let mes = document.getElementById('message')
  if(mes.value === 'google') {
    return setTimeout(() => alert ("Yandex круче. Но это не точно"), 3000) 
  } 
  return alert(document.getElementById('message').value)
}

