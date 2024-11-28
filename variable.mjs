// Deklarasi variabel menggunakan var
var nama = "Budi";
console.log("Nama menggunakan var: " + nama);

// Deklarasi variabel menggunakan let
let umur = 25;
console.log("Umur menggunakan let: " + umur);

// Deklarasi variabel menggunakan const
const pi = 3.14;
console.log("Nilai pi menggunakan const: " + pi);

// Mengubah nilai variabel
umur = 26;
console.log("Umur setelah diubah: " + umur);

// const tidak dapat diubah nilainya
// pi = 3.14159; // Ini akan menyebabkan error

// Variabel dalam fungsi
function perkenalan() {
    let pekerjaan = "Programmer";
    console.log("Pekerjaan: " + pekerjaan);
}
perkenalan();

// Variabel dalam blok
if (true) {
    var hobi = "Membaca";
    let negara = "Indonesia";
    console.log("Hobi: " + hobi);
    console.log("Negara: " + negara);
}
console.log("Hobi di luar blok: " + hobi);
// console.log("Negara di luar blok: " + negara); // Ini akan menyebabkan error karena let memiliki scope blok



function printCompanyInfo(){
    const name = 'Dicoding';
    const legal = 'LLC';

    console.log('Company name:',name);
    console.log('Legal type:',legal);
}

function printEmployeeInfo() {
    const name = 'Nanda';
    const division = 'IT';

    console.log('Employee name:',name);
    console.log('Division:', division);
}

printCompanyInfo();
printEmployeeInfo();

// Penjelasan:
//var: Dapat dideklarasikan ulang dan diubah nilainya. Scope-nya adalah fungsi atau global.

//tet: Tidak dapat dideklarasikan ulang tetapi dapat diubah nilainya. Scope-nya adalah blok.

//const: Tidak dapat dideklarasikan ulang atau diubah nilainya. Scope-nya adalah blok.//

export default function myFunction() {
    console.log('Ini adalah function export default')
}

const name = 'Syanda';
const email = 'Syanda@gmail.com';
const age = 25;

export { name, email, age };