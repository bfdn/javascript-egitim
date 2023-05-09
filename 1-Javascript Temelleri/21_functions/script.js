function selamlama(msg) {
    console.log(msg);
}

selamlama("selam");
selamlama("merhaba");
selamlama("iyi günler");


// function yasHesapla(dogumYili) {
//     console.log(new Date().getFullYear() - dogumYili);
// }

function yasHesapla(dogumYili) {
    return new Date().getFullYear() - dogumYili;
}

let yasAhmet = yasHesapla(1985);
let yasAyse = yasHesapla(1980);
console.log(yasAhmet, yasAyse);

function emekliligeKacYilKaldi(dogumYili, isim) {
    let yas = yasHesapla(dogumYili);
    let kalanYil = 65 - yas;

    if (kalanYil > 0) {
        console.log(`${isim} Emekli olmanıza ${kalanYil} yıl kaldı.`);
    } else {
        console.log("Zaten emekli oldunuz..");
    }
}


emekliligeKacYilKaldi(1980, "Ali");
emekliligeKacYilKaldi(1950, "Ayşe");

// Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.
function toplam() {
    console.log(arguments);
    let sonuc = 0;

    for (let i = 0; i < arguments.length; i++) {
        sonuc += arguments[i];
    }

    return sonuc;
}

console.log(toplam(2, 5));
console.log(toplam(2, 5, 7));
console.log(toplam(2, 5, 7, 10));