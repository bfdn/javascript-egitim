let ogrenciler = ["çınar", "yiğit", "ada"];


sonuc = ogrenciler.length;

// array to string
sonuc = ogrenciler.toString();
sonuc = ogrenciler.join(" "); // string birleştirir araya verilen karakteri ekler
//sonuc = sonuc.split(" "); // string den tekrar diziye dönüştürme

// eleman silme
//sonuc = ogrenciler.pop(); // Son elemanı   silinir ve silinen eleman geri döndürülür.
//sonuc = ogrenciler.shift(); // İlk elemanı silinir ve silinen eleman geri döndürülür.

// eleman ekleme
//sonuc = ogrenciler.push("sena"); // Dizinin sonuna eleman ekler
//sonuc = ogrenciler.unshift("sena"); // Dizinin başına eleman ekler


let markalar1 = ["mazda", "toyota"];
let markalar2 = ["opel", "renault"];
let markalar3 = ["mercedes"];

//sonuc = markalar1.concat(markalar2); // Bununla birleştirme yapıldığı zaman orjinal dizi etkilenmez.
//sonuc = markalar1.concat(markalar2, markalar3); // Bununla birleştirme yapıldığı zaman orjinal dizi etkilenmez.
//sonuc = markalar1.splice(0, 0, markalar2); // 0 dan başla 1 tane eleman sil ve markalar2 dizisini ekle. 0.indisten başlayarak ekler.
//sonuc = markalar1.splice(0, 0, "bmw", "audi"); // 0 dan başla 1 tane eleman sil ve markalar2 dizisini ekle. 0.indisten başlayarak ekler.
// sonuc = markalar1.splice(0, 1, "bmw", "audi"); // 0 dan başla 1 tane eleman sil ve markalar2 dizisini ekle. 0.indisten başlayarak ekler.
sonuc = markalar1.splice(0, 1); // 0 dan başla 1 tane eleman sil ve markalar2 dizisini ekle. 0.indisten başlayarak ekler.



console.log(sonuc);
console.log(markalar1);
//console.log(ogrenciler);


