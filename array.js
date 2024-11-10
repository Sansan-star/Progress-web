const { reverse } = require("dns");

//Mendeklarasikan array
const buah = ['nangka','melon','apel','berry'];
console.log(buah);

//Array.from juga dapat dimanfaatkan untuk menyalin array lainnya seperti berikut ini.
const fruit = ['nangka','melon','apel','berry'];
const buah1 = Array.from(fruit);
console.log(buah1);

//Mengakses nilai array
const angka = [1,2,3,4];
console.log(angka);
console.log(angka[1]);

//Manipulasi nilai array
const myArray = [20,47,33,56];
console.log (myArray);
myArray [2] = 10;
console.log (myArray);

//Menambahkan nilai dalam array
myArray.push(99);
console.log (myArray);

//Menghapus nilai array menggunakan delete
delete myArray[4];
console.log (myArray);

//Menghapus nilai array menggunakan splice
myArray.splice(4);
console.log (myArray);

buah.splice(1.2);
console.log (buah);

//Menghapus nilai array menggunakan shift & pop
//Menghapus nilai menggunakan shift hanya akan menghapus nilai pertama(0)
buah1.shift();
console.log (buah1);

//Menghapus nilai menggunakan pop hanya akan menghapus nilai terakhir
fruit.pop();
console.log(fruit);

//Array Destructuring untuk melihat isi array
const  kendaraan = ['sepeda', 'mobil', 'motor', 'kereta'];
const [rodadua, rodaempat] = kendaraan;
console.log (rodadua,rodaempat);

//Array Method Perlu diketahui bahwa array memiliki banyak sekali method atau fungsi bawaan yang dapat digunakan untuk memudahkan proses pengelolaan atau penggunaannya.
//Reverse digunakana untuk membalikan nilai array
const jumlah = [15,26,37,48];
jumlah.reverse();
console.log(jumlah);

//sort digunakan untuk mengurutkan nilai array
jumlah.sort();
console.log(jumlah);