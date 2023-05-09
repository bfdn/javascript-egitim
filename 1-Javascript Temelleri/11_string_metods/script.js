let kursAdi = " Komple Uygulamalı Web Geliştirme Eğitimi. Eğitimi ";
let kursAdi1 = " Komple Uygulamalı Web Geliştirme";
let kursAdi2 = " Eğitimi. Eğitimi ";

let sonuc;


sonuc = kursAdi.toLowerCase(); // Tüm harfleri küçük yapma
sonuc = kursAdi.toUpperCase(); // Tüm harfleri büyük yapma
sonuc = kursAdi.length; // Kaç karakter
sonuc = kursAdi[0]; // Karakter seçme
sonuc = kursAdi.slice(0, 6); // 0.indeksten başla 6.indekse kadar git. 6.indeksi dahil etme.
sonuc = kursAdi.slice(10); // 10.indeksten başlar sonuna kadar alır.
sonuc = kursAdi.slice(-10); // -10.indeksten başlar sonuna kadar alır.
sonuc = kursAdi.slice(-10, -5); // -10.indeksten başlar -5 e kadar alır

sonuc = kursAdi.substring(0, 6); // 0,6 karakter arasını al
sonuc = kursAdi.substring(10); // 10.indeksten başlar sonuna kadar alır.

sonuc = kursAdi.replace("Eğitimi", "Kursu"); // Kelime, harf değiştirme

sonuc = kursAdi.trim(); // Sağ sol boşlukları siler
sonuc = kursAdi.trimStart(); // Sol boşlukları siler
sonuc = kursAdi.trimEnd(); // Sağ boşlukları siler

sonuc = kursAdi.indexOf("Komple"); // Kaçındı indekste olduğunu verir
sonuc = kursAdi.indexOf("Web"); // Kaçındı indekste olduğunu verir

//sonuc = kursAdi.split(" "); // string parçalama, boşluklardan parçaladık. Diziye dönüştürür. istediğin karakterden ayırırsın.
//dizi = kursAdi.split(" "); // string parçalama, boşluklardan parçaladık. Diziye dönüştürür.
//sonuc = dizi[0];
//sonuc = dizi[1];
//sonuc = dizi[3];

sonuc = kursAdi.replace("Eğitimi", "Kursu"); // Bu şekilde sadece bir tanesini değiştirdi. 
//Tamamını değiştirmesini istiyorsak şu şekilde kullanacağız
sonuc = kursAdi.replace(/Eğitimi/g, "Kursu");
sonuc = kursAdi.replaceAll("Eğitimi", "Kursu"); // Veya bu kullanılabilir.

// String birleştirme
sonuc = kursAdi1.concat(kursAdi2);
sonuc = kursAdi1.concat(",", kursAdi2);
sonuc = kursAdi1.concat(" ", kursAdi2);

// padStart() ve padEnd() // bir dizeyi başka bir dizeyle doldurur
let text = "5";
sonuc = text.padStart(4, "x");
sonuc = text.padEnd(4, "x");

// charAt() - indeksi verilen karakteri verilir
text = "HELLO WORLD";
sonuc = text.charAt(0);

// charCodeAt() - bir stringde belirtilen dizindeki karakterin unicode'unu döndürür:
// bir UTF-16 kodu (0 ile 65535 arasında bir tamsayı) döndürür.
sonuc = text.charCodeAt(0);






// Search Arama metodları

// String indexOf()  // bir dizgenin bir dizgede ilk geçtiği yerin indeksini (konumunu)
let str = "Please locate where 'locate' occurs!";
sonuc = str.indexOf("locate");
//str.indexOf("locate", 15); // Arama 15.indeksten başlar

// String lastIndexOf()  // bir dizede belirtilen bir metnin son geçtiği dizinin dizininin
sonuc = str.lastIndexOf("locate");
//str.lastIndexOf("locate", 15); // Arama 15.indeksten başlar

// String search()  // bir dize (veya normal ifade) için bir dize arar ve eşleşmenin konumunu döndürür:
sonuc = str.search("locate");
/*
İki yöntem indexOf()ve search(), eşit mi?

Aynı bağımsız değişkenleri (parametreleri) kabul ediyorlar ve aynı değeri mi veriyorlar?

İki yöntem eşit DEĞİLDİR . Bunlar farklılıklar:

Yöntem search(), ikinci bir başlangıç ​​konumu bağımsız değişkeni alamaz.
Yöntem, indexOf()güçlü arama değerleri (normal ifadeler) alamaz.
*/


// String match()  // Yöntem match(), bir dizeyi bir dizeyle (veya bir normal ifadeyle) eşleştirmenin sonuçlarını içeren bir dizi döndürür.
str = "The rain in SPAIN stays mainly in the plain";
sonuc = str.match("ain");

// String matchAll()  // Yöntem matchAll(), bir dizeyi bir dizeyle (veya bir normal ifadeyle) eşleştirmenin sonuçlarını içeren bir yineleyici döndürür.
let str1 = "I love cats. Cats are very easy to love. Cats are very popular."
sonuc = str1.matchAll("Cats");

// String includes()  // includes()Bir dize belirtilen bir değer içeriyorsa, yöntem true değerini döndürür.
// büyük/küçük harfe duyarlıdır.,  bir ES6 özelliğidir . 
str = "Hello world, welcome to the universe.";
sonuc = str.includes("worlde");
text.includes("world", 12);  // 12.indeksten itibaren arar

// String startsWith()  // Bir dize belirtilen bir değerle başlıyorsa, yöntem startsWith() true döndürür. değilse false
// büyük/küçük harfe duyarlıdır.
str = "Hello world, welcome to the universe.";
sonuc = str.startsWith("Hello");
sonuc = str.startsWith("world", 5); // 5.indeksten itibaren mi world başlıyor

// String endsWith()  // Bir dize belirtilen bir değerle bitiyorsa, yöntem endsWith()döndürür .true
str = "John Doe";
sonuc = str.endsWith("Doe");

str = "Hello world, welcome to the universe.";
sonuc = str.endsWith("world", 11);




console.log(sonuc);