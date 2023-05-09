//let urun1 = "iphone 12";
//let urun2 = "iphone 13";
//let urun3 = "iphone 13 pro";


let urunler = ["iphone 12", "iphone 13", "iphone 13 pro"];
let fiyatlar = [9000, 12000, 20000];
let renkler = ["gold", "siyah", "beyaz"];

let urun1 = ["iphone 12", 9000, "gold"];
let urun2 = ["iphone 13", 12000, "siyah"];
let urun3 = ["iphone 13 pro", 20000, "beyaz"];
let urun4 = [];
urun4[0] = "iphone 14";
urun4[1] = 25000;
urun4[2] = "siyah";


let urun5 = [
    "iphone 13 pro",
    20000,
    ["siyah", "beyaz", "mavi"]
]
console.log(urun5[2][1]);


console.log(urunler[0]);
console.log(urunler[1]);
console.log(urunler[2]);


console.log(`${urunler[0]}-${fiyatlar[0]}-${renkler[0]}`);
console.log(`${urunler[1]}-${fiyatlar[1]}-${renkler[1]}`);
console.log(`${urunler[2]}-${fiyatlar[2]}-${renkler[2]}`);





let kursAdi = "Komple Web Geliştirme Eğitimi";
console.log(kursAdi[0]);
console.log(kursAdi.split(" "));
console.log(kursAdi.split(" ")[3]);
