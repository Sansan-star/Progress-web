/*If Statement
Adakalanya kita membuat program yang hanya dijalankan ketika suatu kondisi terpenuhi. Untuk melakukan hal itu, 
kita bisa menggunakan if statement. If statement merupakan fundamental statement yang memungkinkan JavaScript untuk membuat keputusan apakah mengeksekusi program atau tidak.  */ 
const gajian = true;
console.log('Berjalan-jalan di mall')
if (gajian) {
    console.log('Makan di restoran mall')
}

//Kita bisa menggunakan keyword else untuk menambah pengecekan kondisi lainnya.

const score = 80;
if (score >= 80) {
    console.log('Selamat anda lulus ujian!')
} else {
    console.log('Maaf anda belum lulus!');
}

/*Lalu, jika memiliki cabang kondisi lebih dari dua, 
Anda dapat mengecek beberapa kondisi sekaligus dengan menggabungkan else dan if.*/

const nilai = 100;
if (nilai >= 90) {
    console.log('Selamat, anda mendapatkan nilai A!')
} else if  (nilai > 80){
    console.log('Selamat, anda mendapatkan nilai B!')
} else{ (nilai > 70)
    console.log('Maaf anda belum lulus ujian')
}

/* Ternary operator atau nama lainnya conditional operator direpresentasikan menggunakan tanda tanya (?). 
Ternary operator membutuhkan tiga operan dengan urutan seperti berikut:
Kondisi yang ingin diperiksa ditulis sebelum tanda tanya (?)
Ekspresi yang dieksekusi jika kondisinya benar.
Ekspresi yang dieksekusi jika kondisi salah.*/

const harga = 5000;
const member = true;
const diskon = member ? 0.1 :0;
console.log(`Anda mendapatkan diskon sebesar ${diskon * harga}`)

//Switch statement adalah control flow statement yang mengevaluasi expression terhadap beberapa kasus. 

const buah = 'Syanda';

switch (buah) {
    case 'pisang':
        console.log('Aku adalah pisang')
        break;

    case 'apel':
        console.log('Aku adalah apel')
        break;    

    case 'nanas':
        console.log('Aku adalah nanas')
        break;

    case 'mangga':
        console.log('Aku adalah mangga')
        break;    
    default:
        console.log('Aku bukanlah buah. Aku programmmer');
}

//Perbandingan
const day = new Date().getDay();

if (day === 0) {
  console.log('Minggu');
} else if (day === 1) {
  console.log('Senin');
} else if (day === 2) {
  console.log('Selasa');
} else if (day === 3) {
  console.log('Rabu');
} else if (day === 4) {
  console.log('Kamis');
} else if (day === 5) {
  console.log('Jumat');
} else if (day === 6) {
  console.log('Sabtu');
} else {
  console.log('Hari tidak valid');
}

//Perbandingan dengn SWICH
const hari = new Date().getDay();

switch (hari) {
  case 0:
    console.log('Minggu');
    break;
  case 1:
    console.log('Senin');
    break;
  case 2:
    console.log('Selasa');
    break;
  case 3:
    console.log('Rabu');
    break;
  case 4:
    console.log('Kamis');
    break;
  case 5:
    console.log('Jumat');
    break;
  case 6:
    console.log('Sabtu');
    break;
  default:
    console.log('Hari tidak valid');
}