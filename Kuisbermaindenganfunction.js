

//Function Declaration: Cara ini adalah yang paling umum. Kamu membuat fungsi dengan menuliskan kata kunci function, diikuti nama fungsi, lalu tanda kurung () untuk parameter, dan {} untuk blok kode.


function namaFunction(parameter1, parameter2) {
  // Blok kode
  return hasil;
}
Contoh:


function tambah(a, b) {
  return a + b;
}

console.log(tambah(5, 3)); // Output: 8
//Function Expression: Di sini, function dibuat dan disimpan di dalam sebuah variabel.


const namaFunction = function(parameter1, parameter2) {
  // Blok kode
  return hasil;
};
Contoh:


const kurang = function(a, b) {
  return a - b;
};

console.log(kurang(10, 4)); // Output: 6
//Arrow Function (ES6+): Ini adalah cara yang lebih singkat untuk membuat fungsi. Biasanya digunakan saat kita hanya ingin membuat fungsi kecil dan cepat.


const namaFunction = (parameter1, parameter2) => hasil;
Contoh:


const kali = (a, b) => a * b;

console.log(kali(4, 5)); // Output: 20

/*Contoh Penerapan dalam Coding
Katakanlah kita ingin membuat tiga fungsi berbeda:

Fungsi untuk menambahkan dua angka.
Fungsi untuk menghitung pangkat.
Fungsi untuk menentukan nilai maksimal dari dua angka.
*/
// Fungsi penjumlahan
function tambah(a, b) {
  return a + b;
}

// Fungsi pangkat
function pangkat(a, b) {
  return a ** b;
}

// Fungsi untuk menentukan nilai maksimal
function maksimum(a, b) {
  if (a >= b) {
    return a;
  } else {
    return b;
  }
}

// Mencetak hasil fungsi-fungsi tersebut
console.log("Hasil dari 7 + 3 adalah:", tambah(7, 3)); // Output: 10
console.log("Hasil dari 2 pangkat 3 adalah:", pangkat(2, 3)); // Output: 8
console.log("Nilai maksimal antara 4 dan 9 adalah:", maksimum(4, 9)); // Output: 9
/*
Tips Belajar Function di JavaScript
Mulai dengan hal sederhana: Coba buat fungsi sederhana seperti penjumlahan, pengurangan, atau perkalian.
Pahami konsep parameter dan return: Parameter adalah nilai yang masuk ke dalam fungsi, sedangkan return adalah nilai yang keluar dari fungsi.
Latihan membuat fungsi: Semakin sering kamu latihan, semakin cepat kamu akan memahami konsep fungsi ini.*/



// Fungsi untuk mendapatkan nilai minimal antara a dan b
const minimal = function(a, b) {
    if (a <= b) {
      return a;
    } else {
      return b;
    }
  };
  
  // Fungsi untuk menghitung pangkat a^b
  function power(a, b) {
    return a ** b;
  }
  
  // Contoh penggunaan fungsi dan mencetak hasilnya
  console.log("Nilai minimal dari 5 dan 3 adalah:", minimal(5, 3));
  console.log("Nilai 2 pangkat 3 adalah:", power(2, 3));
  