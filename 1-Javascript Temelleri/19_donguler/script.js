/*
let toplam = 0;
for (let i = 0; i <= 10; i++) {
    //kod
    toplam += i;

}
console.log(toplam);
*/

let toplam = 0;
let sayilar = [1, 4, 5, 8, 4, 3];
// for (let i = 0; i < sayilar.length; i++) {
//     toplam += sayilar[i];
//     //console.log(sayilar[i]);
// }

// for (let index in sayilar) {
//     //console.log(index);
//     toplam += sayilar[index];
// }

for (let sayi of sayilar) {
    toplam += sayi;
}

console.log(toplam);



let user = {
    "name": "Sadık Turan",
    "username": "sadikturan",
    "password": "12345",
    "email": "info@sadikturan.com"
};

for (let key in user) {
    console.log(key);
    console.log(user[key]);
}