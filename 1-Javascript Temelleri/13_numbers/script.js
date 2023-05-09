let sonuc;

sonuc = 10;
sonuc = "10";
sonuc = Number("10");
sonuc = parseInt("10.6");
sonuc = parseFloat("10.6");
sonuc = parseInt("10a");
sonuc = parseInt("a10"); // hata verir

sonuc = isNaN("10a"); // sayısal bir değil mi?
sonuc = isNaN("10"); // sayısal bir değil mi?

let sayi = 15.12355667

sonuc = sayi.toPrecision(5); // Bütün sayıdan 5 basamaklı değer döndürür.
sonuc = sayi.toFixed(5); // Ondalıklı sayı kısmından 5 basamaklı değer döndürür.



sonuc = Math.round(2.4); // En yakın sayıya yuvarlar
sonuc = Math.round(2.6); // En yakın sayıya yuvarlar
sonuc = Math.ceil(2.2); // her zaman yukarı yuvarlar
sonuc = Math.floor(2.6); // her zaman aşağı yuvarlar
sonuc = Math.sqrt(25); // Karekökünü alır
sonuc = Math.pow(2, 3); // 2 üssü 3 değerini verir
sonuc = Math.abs(-10); // Mutlak değeri verir
sonuc = Math.min(4, 6, 8, 3, 9); // En düşük değeri verir
sonuc = Math.max(4, 6, 8, 3, 9); // En yüksek değeri verir
sonuc = Math.random(); // Rastgele sayı üretir 0-1 arasında sayı üretir
sonuc = Math.random() * 10; // Rastgele sayı üretir 0,9 arası sayı üretir
sonuc = Math.round(Math.random() * 10); // Rastgele sayı üretir 0,9 arası sayı üretir
sonuc = Math.round(Math.random() * 10) + 1; // Rastgele sayı üretir 0,9 arası sayı üretir
sonuc = Math.round(Math.random() * 100) + 50; // Rastgele sayı üretir 0,9 arası sayı üretir





console.log(typeof sonuc);
console.log(sonuc);