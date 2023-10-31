// - Дан массив с числами. Создайте новый массив, состоящий из квадратов этих чисел

// - Дан массив с числами. Найдите сумму этих чисел.

// const numbers = [1, 2, 3, 4, 5]
// const square = []

// numbers.forEach(function(numbers, arr){
// const result = numbers * numbers
// console.log(`${result}`)
// square.push(result)
// })

// console.log(square)
// let sum = 0;
// for (let i = 0; i < square.length; i++) {
//   sum += square[i];
// }
// console.log(sum)

// На map:

// - Дан массив с числами. Сделайте из него массив, состоящий из квадратов этих чисел.

// const numbers = [1, 2, 3, 4, 5]
// const square = numbers.map(function(numbers, arr){
//     const result = numbers * numbers
//     console.log(square)
// })


// На reverse:

// - Дан массив с днями недели ['Понедельник', 'Вторник'...]. Сделайте так, что он начинался с воскресенья и заканчивался понедельником.
// const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"] 
// days.reverse()
// console.log (days)


// 4) На split и join:

// - C помощью метода join превратить массив [3, 2, 1] в строку "3 больше, чем 2 больше, чем 1"

// const strike = [3, 2, 1]
// console.log(strike.join(">"));



// - Дана строка 'я учу javascript!'. С помощью метода split запишите каждое слово этой строки в отдельный элемент массива.

// const arr = "я учу javascript!";
// const devide = arr.split(" ", 3);
// console.log(devide);



// - В переменной date лежит дата в формате '2025-12-31'. Преобразуйте эту дату в формат '31.12.2025'.

// const date = ("2025-12-31")
// const devide = date.split("-", 3);
// devide.reverse()
// console.log(devide.join("."));


// 5) На filter:
// - Дан массив с числами. Оставьте в нем только отрицательные числа. 
// В отдельную переменную положите количество отрицательных чисел в этом массиве.
// const arr = [-1, 1, -2, 2, -3, 3]
// const positive = arr.filter((num) => num > 0) 
// console.log(positive)

// const negative = arr.filter((num) => num < 0) 
// console.log(negative)



// - Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// const arr = ["ASdlol", "AS", "lol", "ASdlolik", "loli",]
// const more = arr.filter((lil) => lil.length > 5) 
// console.log(more)
