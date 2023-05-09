// Metodlar

// concat()
/*
1- iki veya daha fazla diziyi birleştirir (birleştirir).
2- birleştirilmiş dizileri içeren yeni bir dizi döndürür.
3- mevcut dizileri değiştirmez.
*/
// var arr1 = ["Cecilie", "Lone"];
// var arr2 = ["Emil", "Tobias", "Linus"];
// var arr3 = ["Robin"];
// children = arr1.concat(arr2);
// children_three = arr1.concat(arr2, arr3);

// console.log(children);
// console.log(arr1);
// console.log(arr2);
// console.log(children_three);



// copyWithin()
/*
1- dizi öğelerini dizideki başka bir konuma kopyalar.
2- mevcut değerlerin üzerine yazar.
3- diziye öğe eklemez.
*/
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// // fruits.copyWithin(2, 0); // İlk iki dizi öğesini son iki dizi öğesine kopyalayın:
// // fruits.copyWithin(2, 1); //
// fruits.copyWithin(2, 0, 2); // İlk iki dizi öğesini üçüncü ve dördüncü konuma kopyalayın:
// console.log(fruits);


// entries()
/*
1- anahtar/değer çiftlerine sahip bir Dizi Yineleyici nesnesi döndürür:
2- orijinal diziyi değiştirmez.
*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// // console.log(f);

// for (let x of f) {
//     console.log(x);
// }


// every()
/*
1- Yöntem every(), her dizi öğesi için bir işlev yürütür.
2- İşlev, tüm öğeler için true döndürürse, yöntem every()döndürür .true
3- İşlev bir öğe için false döndürürse, yöntem every()döndürür .false
4- Yöntem every(), boş öğeler için işlevi yürütmez.
5- Yöntem every()orijinal diziyi değiştirmez
*/

// const ages = [32, 33, 16, 40];

// console.log(ages.every(checkAge));

// function checkAge(age) {
//     return age > 18;
// }


// fill()
/*
1- Yöntem fill(), bir dizideki belirtilen öğeleri bir değerle doldurur.
2- Yöntem fill(), orijinal dizinin üzerine yazar.
3- Başlangıç ​​ve bitiş konumu belirtilebilir. Değilse, tüm öğeler doldurulacaktır.
*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// //fruits.fill("Kiwi"); // Tüm öğeleri bir değerle doldurun:
// fruits.fill("Kiwi", 2, 4); // Son iki öğeyi doldurun:
// console.log(fruits);


// filter()
/*
1- Yöntem filter(), bir işlev tarafından sağlanan testi geçen öğelerle dolu yeni bir dizi oluşturur.
2- Yöntem filter(), boş öğeler için işlevi yürütmez.
3- Yöntem filter()orijinal diziyi değiştirmez.
*/
// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//     return age >= 18;
// }
// console.log(result);



// find()
/*
1- Yöntem find(), bir testi geçen ilk öğenin değerini döndürür.
2- Yöntem find(), her dizi öğesi için bir işlev yürütür.
3- Hiçbir öğe bulunamazsa yöntem find()geri döner .undefined
4- Yöntem find(), boş öğeler için işlevi yürütmez.
5- Yöntem find()orijinal diziyi değiştirmez.
*/

// const ages = [3, 19, 18, 20];

// function checkAge(age) {
//     return age > 18;
// }

// console.log(ages.find(checkAge));
// console.log(ages.find((age) => age > 18));


// findIndex()
/*
1- Yöntem findIndex(), her dizi öğesi için bir işlev yürütür.
2- Yöntem, findIndex()bir testi geçen ilk öğenin dizinini (konumunu) döndürür.
3- findIndex()Eşleşme bulunamazsa yöntem -1 değerini döndürür .
4- Yöntem findIndex(), boş dizi öğeleri için işlevi yürütmez.
5- Yöntem findIndex()orijinal diziyi değiştirmez.
*/
// const ages = [3, 10, 18, 20];

// console.log(ages.findIndex(checkAge));

// function checkAge(age) {
//     return age > 18;
// }
// console.log(ages.findIndex((age) => age > 18));


// forEach()
/*
1- Yöntem forEach(), bir dizideki her öğe için bir işlev çağırır.
2- Yöntem forEach(), boş öğeler için yürütülmez.
*/
// let text = "";
// const fruits = ["apple", "orange", "cherry"];
// fruits.forEach(myFunction);
// function myFunction(item, index) {
//     text += index + ": " + item + "<br>";
// }
// console.log(text);

// fruits.forEach((element, index) => console.log(index, element))

// fruits.forEach((element, index) => {
//     console.log(index, element);
// });


// from()
/*
1- Yöntem Array.from(), uzunluk özelliğine sahip herhangi bir nesneden bir dizi döndürür.
2- Yöntem Array.from(), yinelenebilir herhangi bir nesneden bir dizi döndürür.
*/
// let text = "ABCDEFG";
// const myArr = Array.from(text);
// console.log(myArr);

// includes()
/*
1- Bir dizi belirtilen bir değer içeriyorsa, yöntem includes()döndürür .true
2- Değer bulunamazsa yöntem includes()döner .false
3- Yöntem includes()büyük/küçük harfe duyarlıdır.
*/
//const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.includes("Mango"));
// console.log(fruits.includes("Apple", 3)); // 3.indeksten itibaren ara



// indexOf()
/*
1- Yöntem, indexOf()belirtilen bir değerin ilk dizinini (konumunu) döndürür.
2- indexOf()Değer bulunamazsa yöntem -1 değerini döndürür .
3- Yöntem indexOf()belirtilen bir dizinde başlar ve soldan sağa doğru arama yapar.
4- Varsayılan olarak, arama ilk elemanda başlar ve sonda biter.
5- Negatif başlangıç ​​değerleri son öğeden itibaren sayılır (ancak yine de soldan sağa doğru arama yapılır).
*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let index = fruits.indexOf("Apple");
// let index1 = fruits.indexOf("Apple", 3);
// let index2 = fruits.indexOf("Apple", -3);
// let index3 = fruits.indexOf("Apple", -1);
// console.log(index);
// console.log(index1);
// console.log(index2);
// console.log(index3);

// isArray()
/*
Yöntem isArray(), true bir nesne bir dizi ise, aksi takdirde false.
*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let result = Array.isArray(fruits);
// let text = "W3Schools";
// let result1 = Array.isArray(text);

// console.log(result);
// console.log(result1);


// join()
/*
1- Yöntem join(), bir diziyi dize olarak döndürür.
2- Yöntem join()orijinal diziyi değiştirmez.
3- Herhangi bir ayırıcı belirtilebilir. Varsayılan virgüldür (,).
*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.join();
// console.log(text);

// const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// let text2 = fruits.join(" and ");
// console.log(text2);




// keys()
/*
1- Yöntem keys(), bir dizinin anahtarlarını içeren bir Dizi Yineleyici nesnesi döndürür.
2- Yöntem keys() orijinal diziyi değiştirmez.
*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = fruits.keys();

// for (let x of keys) {
//     console.log(x);
// }

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const keys = Object.keys(fruits);

// for (let x of keys) {
//     console.log(x);
// }

// lastIndexOf()
/*
1- Yöntem, lastIndexOf()belirtilen bir değerin son dizinini (konumunu) döndürür.
2- lastIndexOf()Değer bulunamazsa yöntem -1 değerini döndürür .
3- Belirtilen bir dizinden başlar lastIndexOf()ve sağdan sola doğru arama yapar.
4- Varsayılan olarak, arama son öğede başlar ve ilk öğede biter.
5- Negatif başlangıç ​​değerleri son öğeden itibaren sayılır (ancak yine de sağdan sola doğru arama yapılır).
*/
// const fruits = ["Apple", "Orange", "Apple", "Mango"];
// console.log(fruits.lastIndexOf("Apple"));
// const fruits2 = ["Orange", "Apple", "Mango", "Apple", "Banana", "Apple", "Test"];
// console.log(fruits2.lastIndexOf("Apple"));

// length()
/*
Özellik length, bir dizideki öğelerin sayısını ayarlar veya döndürür.
*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;
// console.log(length);

// const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// fruits2.length = 2;
// console.log(fruits2.length);


// map()
/*
1- map()her dizi öğesi için bir işlev çağırarak yeni bir dizi oluşturur.
2- map()dizideki her öğe için bir kez işlev çağırır.
3- map()boş öğeler için işlevi yürütmez.
4- map()orijinal diziyi değiştirmez.
*/
// Tüm öğe değerlerinin kareköküyle yeni bir dizi döndürün:
// const numbers = [4, 9, 16, 25];
// const newArr = numbers.map(Math.sqrt)
// console.log(newArr);

// Bir dizideki tüm değerleri 10 ile çarpın:
// const numbers = [65, 44, 12, 4];
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//     return num * 10;
// }

// const newArr = numbers.map((deger) => deger * 10);
// const newArr = numbers.map((deger, index) => deger * 10);
// console.log(newArr);


// pop()
/*
1- Yöntem , bir dizinin son öğesini pop() kaldırır (çıkar) .
2- Yöntem pop() orijinal diziyi değiştirir.
3- Yöntem pop(), kaldırılan öğeyi döndürür.
*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// silinen_deger = fruits.pop();

// console.log(fruits);
// console.log(silinen_deger);




// prototype-------
/*
1- prototype dizilere yeni özellikler ve yöntemler eklemenizi sağlar.
2- prototype tüm JavaScript nesnelerinde kullanılabilen bir özelliktir.
*/
// Array.prototype.myUcase = function () {
//     for (let i = 0; i < this.length; i++) {
//         this[i] = this[i].toUpperCase();
//     }
// };
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.myUcase();

// console.log(fruits);




// push()
/*
1- Yöntem , bir dizinin sonuna push() yeni öğeler ekler .
2- Yöntem push(), dizinin uzunluğunu değiştirir.
3- Yöntem push() yeni uzunluğu döndürür.
*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi");
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.push("Kiwi", "Lemon");
// console.log(fruits);





// reduce()
/*

*/

// reduceRight()
/*

*/

// reverse()
/*
1- Yöntem reverse(), bir dizideki öğelerin sırasını tersine çevirir.
2- Yöntem reverse(), orijinal dizinin üzerine yazar.
*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.reverse();

// console.log(fruits);




// shift()
/*
1- Yöntem , bir dizinin ilk öğesini shift() kaldırır .
2- Yöntem shift() orijinal diziyi değiştirir.
3- Yöntem shift(), kaydırılan öğeyi döndürür.
*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.shift();
// console.log(fruits);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// silinen_deger = fruits.shift();
// console.log(fruits);
// console.log(silinen_deger);



// slice()
/*
1- Yöntem slice(), bir dizideki seçili öğeleri yeni bir dizi olarak döndürür.
2- Yöntem slice(), belirli bir başlangıçtan (dahil değil) belirli bir sona kadar seçim yapar .
3- Yöntem slice()orijinal diziyi değiştirmez.
*/
// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1, 3); // 3.indis dahil olmaz. 3.indise kadar

// // console.log(fruits);
// console.log(citrus);

// Negatif değerler kullanarak öğeleri seçin:
// const fruits2 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const myBest = fruits2.slice(-3, -1);
// console.log(myBest);


// some()
/*
1- Yöntem some(), herhangi bir dizi öğesinin bir testi geçip geçmediğini kontrol eder (geri çağırma işlevi olarak sağlanır).
2- Yöntem some(), her dizi öğesi için geri arama işlevini bir kez yürütür.
3- İşlev , dizi öğelerinden biri için dönerse, some()yöntem geri döner true(ve durur) .true
4- İşlev, dizi öğelerinin tümü için dönerse, yöntem some()döner .falsefalse
5- Yöntem some(), boş dizi öğeleri için işlevi yürütmez.
6- Yöntem some() orijinal diziyi değiştirmez.
*/
// Herhangi bir değerin 18'in üzerinde olup olmadığını kontrol edin:
// const ages = [3, 10, 18, 20];

// let sonuc = ages.some(checkAdult);
// function checkAdult(age) {
//     return age > 18;
// }

// console.log(sonuc);



// sort()
/*
1- sort()Bir dizinin öğelerini sıralar.
2- sort()Orijinal dizinin üzerine yazar.
3- sort()Öğeleri dizeler halinde alfabetik ve artan düzende sıralar.
*/
// const fruits = ["Banana", "Orange", "Apple", "Mango"]; // 
// fruits.sort();
// console.log(fruits);

// const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
// fruits2.sort();
// fruits2.reverse();
// console.log(fruits2);




// splice()
/*
1- Yöntem splice(), dizi öğelerini ekler ve/veya kaldırır.
2- Yöntem splice(), orijinal dizinin üzerine yazar.
*/
//2 konumunda 2 öğe ekleyin:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);

// 2 konumunda 2 öğeyi kaldırın:
// const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits2.splice(2, 2);
// console.log(fruits2);




// toString()
/*
1- Yöntem toString(), virgülle ayrılmış dizi değerlerine sahip bir dize döndürür.
2- Yöntem toString() orijinal diziyi değiştirmez.
*/

// Bir diziyi bir dizgeye dönüştürün:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let text = fruits.toString();
// console.log(text);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// console.log(fruits.join());



// unshift()
/*
1- Yöntem , bir dizinin başına unshift() yeni öğeler ekler .
2- Yöntem unshift(), orijinal dizinin üzerine yazar.
*/
//Bir diziye yeni öğeler ekleyin:
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift("Lemon", "Pineapple");
// console.log(fruits);



// valueOf()
/*
1- Yöntem valueOf(), dizinin kendisini döndürür.
2- Yöntem valueOf()orijinal diziyi değiştirmez.
3- fruits.valueOf()ile aynı şekilde döndürür fruits.
*/

// Meyvelerin değerini alın:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const myArray = fruits.valueOf();
console.log(myArray);


// fruits.valueOf() meyvelerle aynı şeyi döndürür:
const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
const myArray2 = fruits2;
console.log(myArray2);