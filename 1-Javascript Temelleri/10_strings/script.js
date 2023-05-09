let ad = "Sadık";
let soyad = "Turan";
//et yas = 39;
// let yas = 66;
let yas = 45;
let sehir = "Kocaeli";

let mesaj = "Benim adım " + ad + " ve soyadım " + soyad + ". " + sehir + "'de yaşıyorum." + " Emekliliğe " + (65 - 39) + " yılım kaldı.";


// backtick işareti tırnağı
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliğe ${65 - yas} yılım kaldı.`;

// ternary operators
let emeklilik = (65 - yas > 0) ? "Emekliliğe " + (65 - yas) + " yıl kaldı" : "Zaten emekli oldunuz.";
mesaj = `Benim adım ${ad} ve soyadım ${soyad}. ${sehir}'de yaşıyorum. Emekliliğe ${emeklilik}`;



console.log(mesaj);

