/*For Loop
Pertama, kita akan bahas for loop. Struktur dari for loop tampak seperti berikut ini*/
/*
for (variabel awal; test kondisi; increment) {
    // do something
  }

  Variabel awal adalah nilai variabel sebelum looping dilakukan. 
  Test kondisi adalah evaluasi dari looping, 
  jika bernilai false, looping akan berhenti. 
  Increment adalah nilai variabel yang bertambah setiap looping dilakukan. Perhatikan contoh berikut ini.
*/

for (let i = 0; i <= 5; i++) {
  console.log (`Angka ke-${i} adalah ${i}`);
  
}
/* Angka ke-5 adalah 5 Pada contoh di atas,
 nol merupakan nilai awal sebelum looping dijalankan. 
 Pengecekan kondisi i < 5 sebelum looping, 
 ketika bernilai false, looping akan terhenti. 
 Terakhir, i++ artinya adalah nilai i akan bertambah setiap looping dilakukan.*/

 /*For In
For in banyak digunakan untuk pengulangan pada object
karena ia dapat melakukan iterasi ke seluruh data di dalam objek. 
Bahkan, ia juga dapat melakukan iterasi ke properti inheritance dari object seperti length. 
Berikut contoh penggunaan for in.*/

const person = { name : 'fulan', address: 'Bojonegoro', birthYear : '1999'};

for (const property in person) {
    console.log (`${property} berisi ${person[property]}`);
}

/*Sintaks dari for in tidak berbeda jauh dengan for loop.
 Dengan menggunakan for in kita tidak perlu menuliskan nilai variabel awal, 
 test kondisi dan increment. For in akan melakukan perulangan item yang ada di dalam object 
 (pada contoh object person). Pada contoh di atas, for akan melakukan looping semua item yang ada di dalam objek person.*/

 /*For Of
Kehadiran for of dimulai pada ECMAScript 2015 (ES6). 
For of berbeda dengan for in. 
For of lebih sederhana karena kita tidak perlu memikirkan property dan key. */

const nama = ['Ayam', 'Bebek', 'Telor', 'Tempe']

for (const menu of nama) {
  console.log(menu);
}

/* Dengan for of datanya bisa kita dapatkan langsung tanpa menambahkan indeks atau nama propertinya 
seperti contoh di atas. Sintaksnya lebih ringkas karena kita hanya perlu memanggil variabel item. 
Variabel item merupakan sebuah variabel yang digunakan untuk menampung element dari array. 
For of dapat digunakan pada object yang bisa diiterasi seperti arrays, strings, sets, dan maps*/

//While
//While statement akan mengeksekusi statement ketika kondisinya bernilai truthy.

let i = 0;

while (i < 5) {
  console.log(`Angka ke-${i} adalah ${i}`);
  i++;
}

//Do-While
//While melakukan evaluasi kondisi di awal, 
//sedangkan do-while melakukannya di akhir.

let a = 0;
do {
  console.log(`Angka ke-${i} adalah ${i}.`);
  i++;
} while (i < 5);

//Break
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }

  console.log(i);
}

//Cotinue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
      continue;
  }
  console.log(i);
}