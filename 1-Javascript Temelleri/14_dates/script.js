let simdi = new Date(); // şimdiki tarih - saat

sonuc = simdi;

// Get Methods
sonuc = simdi.getDate(); // gün gelir 10.gün
sonuc = simdi.getDay(); // Hangi gün olduğunu söyler 0: pazar 6: cumartesi
sonuc = simdi.getFullYear(); // Yıl bilgisi verir 
sonuc = simdi.getHours(); // Saat bilgisi verir 
sonuc = simdi.getMinutes(); // Dakika bilgisi verir 
sonuc = simdi.getMonth(); // Ay bilgisi verir       0: Ocak - 11: Aralık
sonuc = simdi.getTime(); // Saat bilgisi verir   milisecond cinsinden verir.


// Set Methods
//simdi.setFullYear(2025);
simdi.setMonth(7);
simdi.setDate(15);




sonuc = simdi;


let dogumTarihi = new Date(1990, 5, 15);

sonuc = simdi.getFullYear() - dogumTarihi.getFullYear();

let milisecond = simdi - dogumTarihi; // milisecond türünden cevap döner
let saniye = milisecond / 1000; // saniye
let dakika = saniye / 60; // dakika
let saat = dakika / 60; // saat
let gun = saat / 24; // saat


sonuc = gun;



console.log(sonuc);
console.log(typeof sonuc);

