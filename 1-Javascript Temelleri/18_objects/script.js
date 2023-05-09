// let user1 = ["Sadık", "Turan", 38];
// let user2 = ["Sadık", "Turan", 38];


/*
let user = {
    "name": "Sadık",
    "last": "Turan",
    "age": 38,
    "address": "Kocaeli izmit"
}
*/


let user = {
    "name": "Sadık",
    "last": "Turan",
    "age": 38,
    "address": {
        "sehir": "kocaeli",
        "ilce": "izmit"
    },
    "hobiler": ["sinema", "spor"]
}

let user2 = {
    "name": "Test",
    "last": "Turan",
    "age": 38,
    "address": {
        "sehir": "kocaeli",
        "ilce": "izmit"
    },
    "hobiler": ["sinema", "spor"]
}

let sonuc;

sonuc = user["name"];
sonuc = user["last"];

sonuc = user.name;
sonuc = user.last;
sonuc = user.age;
sonuc = user.address.sehir;
sonuc = user.address.ilce;
sonuc = user.hobiler[0];


let kullanicilar = [
    user,
    user2
];


sonuc = kullanicilar[1]
sonuc = kullanicilar[1].name




let urunler = [
    {
        "urun_adi": "samsung s22",
        "urun_fiyat": 13000
    },
    {
        "urun_adi": "samsung s23",
        "urun_fiyat": 15000
    },
]

sonuc = urunler[0];
sonuc = urunler[0].urun_adi;

console.log(sonuc);